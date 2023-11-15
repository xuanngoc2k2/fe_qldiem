import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { countScoreSv } from '~/apis';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#FF0000', '#FF6666', '#FFA07A', '#A9A9A9'];

const ChartContainer = styled.div`
    display: flex;
    // flex-direction: column;
    align-items: center;
`;

const ChartTitle = styled.div`
    margin-top: 20px;
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
    color: green;
`;

const SvThongKe = () => {
    const { id } = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        try {
            countScoreSv(id).then((value) => {
                console.log(value);
                setData(Object.entries(value).map(([grade, count], index) => ({ grade, count, fill: COLORS[index] })));
            });
        } catch {
            alert("Lỗi lấy API");
        }
    }, [id]);
    const totalCredits = data.reduce((acc, score) => acc + score.count, 0);

    return (<>
        <ChartTitle>Biểu đồ điểm Sinh Viên</ChartTitle>
        <ChartContainer>
            <PieChart width={600} height={400}>
                <Pie
                    data={data}
                    dataKey="count"
                    nameKey="grade"
                    cx="50%"
                    cy="50%"
                    outerRadius={120}
                    fill="#8884d8"
                    label
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                </Pie>
                <Tooltip />
                <Legend />
            </PieChart>
            <div>
                Tổng số tín đã học: {totalCredits}
            </div>
        </ChartContainer>
    </>
    );
};

export default SvThongKe;
