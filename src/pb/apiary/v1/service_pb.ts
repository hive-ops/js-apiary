// @generated by protoc-gen-es v2.0.0 with parameter "target=ts"
// @generated from file apiary/v1/service.proto (package apiary.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import type { ClearEntriesRequestSchema, DeleteEntriesRequestSchema, GetEntriesRequestSchema, SetEntriesRequestSchema } from "./requests_pb";
import { file_apiary_v1_requests } from "./requests_pb";
import type { ClearEntriesResponseSchema, DeleteEntriesResponseSchema, GetEntriesResponseSchema, SetEntriesResponseSchema } from "./responses_pb";
import { file_apiary_v1_responses } from "./responses_pb";

/**
 * Describes the file apiary/v1/service.proto.
 */
export const file_apiary_v1_service: GenFile = /*@__PURE__*/
  fileDesc("ChdhcGlhcnkvdjEvc2VydmljZS5wcm90bxIJYXBpYXJ5LnYxMtICCg1BcGlhcnlTZXJ2aWNlEksKCkdldEVudHJpZXMSHC5hcGlhcnkudjEuR2V0RW50cmllc1JlcXVlc3QaHS5hcGlhcnkudjEuR2V0RW50cmllc1Jlc3BvbnNlIgASSwoKU2V0RW50cmllcxIcLmFwaWFyeS52MS5TZXRFbnRyaWVzUmVxdWVzdBodLmFwaWFyeS52MS5TZXRFbnRyaWVzUmVzcG9uc2UiABJUCg1EZWxldGVFbnRyaWVzEh8uYXBpYXJ5LnYxLkRlbGV0ZUVudHJpZXNSZXF1ZXN0GiAuYXBpYXJ5LnYxLkRlbGV0ZUVudHJpZXNSZXNwb25zZSIAElEKDENsZWFyRW50cmllcxIeLmFwaWFyeS52MS5DbGVhckVudHJpZXNSZXF1ZXN0Gh8uYXBpYXJ5LnYxLkNsZWFyRW50cmllc1Jlc3BvbnNlIgBCYgoNY29tLmFwaWFyeS52MUIMU2VydmljZVByb3RvUAGiAgNBWFiqAglBcGlhcnkuVjHKAglBcGlhcnlcVjHiAhVBcGlhcnlcVjFcR1BCTWV0YWRhdGHqAgpBcGlhcnk6OlYxYgZwcm90bzM", [file_apiary_v1_requests, file_apiary_v1_responses]);

/**
 * @generated from service apiary.v1.ApiaryService
 */
export const ApiaryService: GenService<{
  /**
   * @generated from rpc apiary.v1.ApiaryService.GetEntries
   */
  getEntries: {
    methodKind: "unary";
    input: typeof GetEntriesRequestSchema;
    output: typeof GetEntriesResponseSchema;
  },
  /**
   * @generated from rpc apiary.v1.ApiaryService.SetEntries
   */
  setEntries: {
    methodKind: "unary";
    input: typeof SetEntriesRequestSchema;
    output: typeof SetEntriesResponseSchema;
  },
  /**
   * @generated from rpc apiary.v1.ApiaryService.DeleteEntries
   */
  deleteEntries: {
    methodKind: "unary";
    input: typeof DeleteEntriesRequestSchema;
    output: typeof DeleteEntriesResponseSchema;
  },
  /**
   * @generated from rpc apiary.v1.ApiaryService.ClearEntries
   */
  clearEntries: {
    methodKind: "unary";
    input: typeof ClearEntriesRequestSchema;
    output: typeof ClearEntriesResponseSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_apiary_v1_service, 0);

