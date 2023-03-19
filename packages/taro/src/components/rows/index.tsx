import { Row } from "./row";
import { Col } from "./col";

export * from "./row";
export * from "./col";

export const Grid: {
  Row: typeof Row;
  Col: typeof Col;
} = {
  Row,
  Col,
};
