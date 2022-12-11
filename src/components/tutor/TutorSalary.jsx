import React from 'react';
import { Table, Typography } from 'antd';

const { Text } = Typography;



const columns = [
    
    {
        title: 'SDT người gửi',
        dataIndex: 'phone',
    },
    {
        title: 'Thời gian chuyển khoản',
        dataIndex: 'time',
    },
    {
        title: 'Nội dung chuyển khoảng',
        dataIndex: 'message',
    },
    {
        title: 'Số tiền chuyển khoản',
        dataIndex: 'amount',
        render: (text) => <p className='text-green-600 font-bold'> +{Intl.NumberFormat().format(text)}</p>
    }
];

const data = [
    {
        key: '1',
        phone: '0123456',
        amount: 1500000,
        message: 'chuyen tien hoc phi thang 10',
        time: '21:14 - 09/12/2022',
        name: 'John Brown',
    },
    {
        key: '2',
        phone: '0123456',
        amount: 1500000,
        message: 'chuyen tien hoc phi thang 10',
        time: '21:14 - 09/12/2022',
        name: 'John Brown',
    },
    {
        key: '3',
        phone: '0123456',
        amount: 1500000,
        message: 'chuyen tien hoc phi thang 10',
        time: '21:14 - 09/12/2022',
        name: 'John Brown',
    },
    {
        key: '4',
        phone: '0123456',
        amount: 1500000,
        message: 'chuyen tien hoc phi thang 10',
        time: '21:14 - 09/12/2022',
        name: 'John Brown',
    },
];

const fixedColumns = [
    {
        title: 'Name',
        dataIndex: 'name',
        fixed: true,
        width: 100,
    },
    {
        title: 'Description',
        dataIndex: 'description',
    },
];


function TutorSalary() {
    return(
        <>
            <Table
                columns={columns}
                dataSource={data}
                pagination={true}

                bordered
                summary={(pageData) => {
                    let totalSalary = 0;
                    let totalSalaryRendered = 0;

                    pageData.forEach(({ amount }) => {
                        totalSalary += amount;
                    });

                    totalSalaryRendered = Intl.NumberFormat().format(totalSalary);

                    return (
                        <>
                            <Table.Summary.Row >
                                <Table.Summary.Cell align="right" colSpan={2}></Table.Summary.Cell>
                                <Table.Summary.Cell className='font-bold' >Tổng lương</Table.Summary.Cell>
                                <Table.Summary.Cell >
                                    <Text type="danger" className='font-bold'>+{totalSalaryRendered}</Text>
                                </Table.Summary.Cell>
                            </Table.Summary.Row>

                        </>
                    );
                }}
            />
        </>
    )

};

export default TutorSalary;