// @generated by protoc-gen-connect-es v1.4.0 with parameter "target=ts"
// @generated from file apiary/v1/service.proto (package apiary.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { ClearEntriesRequest, DeleteEntriesRequest, GetEntriesRequest, SetEntriesRequest } from "./requests_pb";
import { ClearEntriesResponse, DeleteEntriesResponse, GetEntriesResponse, SetEntriesResponse } from "./responses_pb";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service apiary.v1.ApiaryService
 */
export const ApiaryService = {
  typeName: "apiary.v1.ApiaryService",
  methods: {
    /**
     * @generated from rpc apiary.v1.ApiaryService.GetEntries
     */
    getEntries: {
      name: "GetEntries",
      I: GetEntriesRequest,
      O: GetEntriesResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc apiary.v1.ApiaryService.SetEntries
     */
    setEntries: {
      name: "SetEntries",
      I: SetEntriesRequest,
      O: SetEntriesResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc apiary.v1.ApiaryService.DeleteEntries
     */
    deleteEntries: {
      name: "DeleteEntries",
      I: DeleteEntriesRequest,
      O: DeleteEntriesResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc apiary.v1.ApiaryService.ClearEntries
     */
    clearEntries: {
      name: "ClearEntries",
      I: ClearEntriesRequest,
      O: ClearEntriesResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

