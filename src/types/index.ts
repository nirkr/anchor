export type ControllerResponse<T=null> = {
    status: number;
    data?: T;
    error?: Error;
  };  

export type Column = {
    name: string, 
    type: string
}

export type Schema = {
    columns: Column[]
}

export type SetCellInput = {
    sheetId: string;
    columnName: string;
    rowIndex: number;
    newValue: number | string  // or other type
  }