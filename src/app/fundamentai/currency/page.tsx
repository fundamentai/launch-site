'use client'
import { Button, Upload, UploadProps, message } from 'antd'
import React, { useState } from 'react'
import XLSX from 'xlsx'
import { UploadOutlined } from '@ant-design/icons'

export default function page() {
    // onchange states
    const [excelFile, setExcelFile] = useState<any>(null)
    const [typeError, setTypeError] = useState<any>(null)

    // submit state
    const [excelData, setExcelData] = useState(null)

    // onchange event
    const handleFile = (e: any) => {
        let fileTypes = ['application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'text/csv']
        let selectedFile = e.target.files[0]
        if (selectedFile) {
            if (selectedFile && fileTypes.includes(selectedFile.type)) {
                setTypeError(null)
                let reader = new FileReader()
                reader.readAsArrayBuffer(selectedFile)
                reader.onload = (e: any) => {
                    setExcelFile(e.target.result)
                }
            } else {
                setTypeError('Please select only excel file types')
                setExcelFile(null)
            }
        } else {
            console.log('Please select your file')
        }
    }

    // submit event
    const handleFileSubmit = (e: any) => {
        e.preventDefault()
        if (excelFile !== null) {
            const workbook = XLSX.read(excelFile, { type: 'buffer' })
            const worksheetName = workbook.SheetNames[0]
            const worksheet = workbook.Sheets[worksheetName]
            const data = XLSX.utils.sheet_to_json(worksheet) as any
            setExcelData(data.slice(0, 10))
        }
    }

    console.log(excelData)

    return (
        <div className="w-full min-h-[70vh] flex flex-col items-center  py-10">
            <h3>Upload & View Excel Sheets</h3>

            {/* form */}
            <form className="form-group custom-form" onSubmit={handleFileSubmit}>
                <input type="file" className="form-control" required onChange={handleFile} />
                <button type="submit" className="btn btn-success btn-md">
                    UPLOAD
                </button>
                {typeError && (
                    <div className="alert alert-danger" role="alert">
                        {typeError}
                    </div>
                )}
            </form>
        </div>
    )
}
