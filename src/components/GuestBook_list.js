import '../styles/Home.css';
import '../styles/GuestBook_list.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function GuestBook_list() {
    const [List,setList] = useState([]); //빈 배열로 훅 사용
    
    useEffect(() => {
        axios.get("http://gyeone.fecsen.com/api/list/get")
        .then(res => {
            setList(res.data); //임시저장소
        })
        .catch(err => {
            console.log(err);
        })
    },[]); // 컴포넌트 렌더링 이후 수행

    return (
        List.map((v) => {
            return (
                <div className='guestbook-list'>
                    <div className='division'/>
                        <div className='list-name'><h4>Name: {v.name}</h4></div>
                        <div className='list-contents'><h4>Contents: {v.contents}</h4></div>
                        <div className='list-date'><h5>{v.date}</h5></div>
                    <div className='division'/>
                </div>
            );
        }) //v는 임시저장소로 v에 데이터가 저장되었다가 map함수로 인해 배열 순서대로 렌더링 됨
    )
}

export default GuestBook_list;