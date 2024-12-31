import { SetCellInput } from './../types/index';
import { ControllerResponse, Schema } from "../types"


export const createSheet = ( data: Schema): Promise<ControllerResponse> => {
    
}

export const setCellValue = ( {sheetId, columnName, rowIndex, newValue}:SetCellInput) :  Promise<ControllerResponse> => {

}

export const getSheetById = ( sheetId: number ): Promise<ControllerResponse<Schema>> => {

}