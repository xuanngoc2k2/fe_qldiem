import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import UploadDiemModal from '~/components/modals/UploadDiem';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { svGetDiem } from '~/apis';
import BangDiemSV from '../BangDiemSV';

function SvHome() {
    const [csvData, setCSVData] = useState([]);
    const [userInfo, setUserInfo] = useState({});
    const [show, setShow] = useState(false);
    const [cookie, setCookie] = useCookies(['user']);
    const navigate = useNavigate();
    useEffect(() => {
        svGetDiem(cookie.user.id).then((data) => {
            setUserInfo(data.userInfo);
            setCSVData(data.data);
        });
    }, []);
    return (<BangDiemSV data={csvData} userInfo={userInfo} />
        // <div>
        //     <h1>Bảng Điểm</h1>
        //     <table>
        //         <thead>
        //             <tr>
        //                 {csvData[0] && Object.keys(csvData[0]).map((header, index) => <th key={index}>{header}</th>)}
        //             </tr>
        //         </thead>
        //         <tbody>
        //             {csvData.map((row, index) => (
        //                 <tr key={index}>
        //                     {Object.values(row).map((value, index) => (
        //                         <td key={index}>{value}</td>
        //                     ))}
        //                 </tr>
        //             ))}
        //         </tbody>
        //     </table>
        // </div>
    );
}

export default SvHome;
