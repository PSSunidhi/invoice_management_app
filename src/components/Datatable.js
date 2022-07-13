import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {  DataGrid } from '@mui/x-data-grid';
const datagridSx = {
  borderRadius: 2,
  '& div[data-rowIndex][role="row"]': {
    color: "white"
  },
  "& .MuiDataGrid-columnHeaders": {
    color: "white",
    fontSize: 16,
  }
}
const columns = [
  { field: 'sl_no', headerName: 'SL_NO',width:70,headerClassName: 'super-app-theme--header'},
  { field: 'business_code', headerName: 'BUSINESS_CODE', width: 150, height: 100,headerClassName: 'super-app-theme--header' },
  { field: 'cust_number', headerName: 'CUST_NUMBER', width: 150,headerClassName: 'super-app-theme--header'},
  { field: 'clear_date', headerName: 'CLEAR_DATE', width: 150,headerClassName: 'super-app-theme--header'},
  { field: 'buisness_year', headerName: 'BUISNESS_YEAR', width: 150 ,headerClassName: 'super-app-theme--header'},
  { field: 'doc_id', headerName: 'DOC_ID', width: 100 ,headerClassName: 'super-app-theme--header'},
  { field: 'posting_date', headerName: 'POSTING_DATE', width: 150 ,headerClassName: 'super-app-theme--header'},
  { field: 'document_create_date', headerName: 'DOCUMENT_CREATE_DATE', width: 250,headerClassName: 'super-app-theme--header'},
  { field: 'document_create_date1', headerName: 'DOCUMENT_CREATE_DATE1', width: 250 ,headerClassName: 'super-app-theme--header'},
  { field: 'due_in_date', headerName: 'DUE_IN_DATE', width: 120 ,headerClassName: 'super-app-theme--header'},
  { field: 'invoice_currency', headerName: 'INVOICE_CURRENCY', width: 170,headerClassName: 'super-app-theme--header'},
  { field: 'document_type', headerName: 'DOCUMENT_TYPE', width: 150,headerClassName: 'super-app-theme--header'},
  { field: 'posting_id', headerName: 'POSTING_ID', width: 100 ,headerClassName: 'super-app-theme--header'},
  { field: 'area_business', headerName: 'AREA_BUSINESS', width: 150 ,headerClassName: 'super-app-theme--header'},
  { field: 'total_open_amount', headerName: 'TOTAL_OPEN_AMOUNT', width: 200 ,headerClassName: 'super-app-theme--header'},
  { field: 'baseline_create_date', headerName: 'BASELINE_CREATE_DATE', width: 200 ,headerClassName: 'super-app-theme--header'},
  { field: 'cust_payment_terms', headerName: 'CUST_PAYMENT_TERMS', width: 200 ,headerClassName: 'super-app-theme--header'},
    { field: 'buisness_year', headerName: 'BUISNESS_YEAR', width: 150 ,headerClassName: 'super-app-theme--header'},
    { field: 'invoice_id', headerName: 'INVOICE_ID', width: 140 ,headerClassName: 'super-app-theme--header'},
    { field: 'isOpen', headerName: 'ISOPEN', width: 80 ,headerClassName: 'super-app-theme--header'},
    { field: 'aging_bucket', headerName: 'AGING_BUCKET', width: 150 ,headerClassName: 'super-app-theme--header'},
    { field: 'is_deleted', headerName: 'IS_DELETED', width: 150 ,headerClassName: 'super-app-theme--header'}
]


const DataTable = () => {

    const [tableData, setTableData] = useState([])
  
    useEffect(() => {
      axios.get('http://localhost:8081/H2H/fetch?')
      .then((data) => setTableData(data.data))
     
    }, [])
    
    return (
      <div style={{ height: 500, width: '100%',color: 'white' }} className='page'>
        <DataGrid
          
          rows={tableData}
          columns={columns}
          pageSize={10}
          checkboxSelection
          getRowId={(tableData) => tableData.sl_no}
          sx={datagridSx}
        />
        
      </div>
    )
  }
  

export default DataTable