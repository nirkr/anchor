import { StatusCodes } from "http-status-codes";
import { SetCellInput } from "../types/index";
import { ControllerResponse, Schema } from "../types";

export const createSheet = async (
  data: Schema
): Promise<ControllerResponse> => {
  try {
    return { status: StatusCodes.OK };
  } catch (error: any) {
    return { status: StatusCodes.INTERNAL_SERVER_ERROR };
  }
};

export const setCellValue = async ({
  sheetId,
  columnName,
  rowIndex,
  newValue,
}: SetCellInput): Promise<ControllerResponse> => {
  try {
    return { status: StatusCodes.OK };
  } catch (error: any) {
    return { status: StatusCodes.INTERNAL_SERVER_ERROR };
  }
};

export const getSheetById = async (
  sheetId: number
): Promise<ControllerResponse> => {
  try {
    return { status: StatusCodes.OK };
  } catch (error: any) {
    return { status: StatusCodes.INTERNAL_SERVER_ERROR };
  }
};
