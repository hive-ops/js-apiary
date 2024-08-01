setup-project:
	npm i -g nodemon
	brew install bufbuild/buf/buf
	#	go install google.golang.org/protobuf/cmd/protoc-gen-go@latest
	#	go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@latest

mod-tidy:
	go mod tidy

mod-vendor: mod-tidy
	go mod vendor

vet:
	go vet ./...

dev: start-services
	nodemon

start-services:
	docker-compose down
	docker-compose up -d

compile-proto:
	find ./src/pb -name "*.d.ts" -exec rm {} +
	find ./src/pb -name "*.js" -exec rm {} +
	buf generate --path=apiary-proto/apiary
	find ./src/pb -name "*.ts" -type f -print0 | xargs -0 sed -i '' 's/_pb\.js/_pb/g'

compile-proto-ts:
	find ./src/pb -name "*.d.ts" -exec rm {} +
	find ./src/pb -name "*.js" -exec rm {} +
	protoc --plugin=./node_modules/.bin/protoc-gen-ts_proto \
	 --ts_proto_out=src/pb \
	 --ts_proto_opt=outputServices=grpc-js \
	 --ts_proto_opt=esModuleInterop=true \
	 -I=apiary-proto/ apiary-proto/apiary/v1/*.proto

	#npx grpc_tools_node_protoc \
#    --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
#    --ts_out=src/pb \
#    -I ./apiary-proto \
#    apiary-proto/apiary/v1/*.proto

pull-submodules:
	git submodule update --remote --merge --recursive
	make compile-proto

tests:
	go test -v `go list ./... | grep -v ./pb` -race -coverprofile=coverage.out; go tool cover -html=coverage.out
