import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import styled from 'styled-components';

export default function ThongKe({ show, handleClose, data }) {
    const chartData = Object.entries(data).map(([grade, count]) => ({ grade, count }));
    return (
        <>
            {show && (
                <Modal show={show} onHide={handleClose} centered>
                    <div className='sd'>

                        <Modal.Header closeButton>
                            <Modal.Title>Thống kê</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <BarChart
                                width={470}
                                height={300}
                                data={chartData}
                                margin={{ top: 20, right: 30, left: 5, bottom: 5 }}
                            >
                                <text x={235} y={15} textAnchor="middle" fontSize={16} fontWeight="bold">
                                    Phân Phối Điểm Sinh Viên
                                </text>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="grade" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="count" fill="#8884d8" name='Số sinh viên' />
                            </BarChart>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </div>
                </Modal >
            )
            }
        </>
    );
}
