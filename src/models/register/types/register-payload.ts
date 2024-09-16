import { BasePayload } from "@/models/common/types/BasePayload";

export interface RegisterPayloadType extends BasePayload {
  username: string;
  email: string;
  password: string;
  city_id: number;
}