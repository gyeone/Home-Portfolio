import '../styles/Home.css';
import axios from 'axios';
import { useState } from 'react';

function GuestBook_post() {
    const [name,Setname] = useState("");
    const [contents,Setcontents] = useState("");

    const nameChange = (e) => Setname(e.target.value); //input태그의 변화값을 state에 담는다
    const contentsChange =(e) => Setcontents(e.target.value); //textarea태그의 변화값을 state에 담는다

    const data = {
        name: name,
        contents: contents
    }; // 오른쪽의 name 이라고하는 state를 왼쪽의 name 이라고 하는 이름으로 담겠다 (contents도 동일)
    
    const onSubmit = (e) => {
        if (name == "") {
            alert("이름을 입력하세요!");
        }
        else if (contents == "") {
            alert("내용을 입력하세요!");
        }
        else {
        axios.post("http://gyeone.fecsen.com/api/list/post", data)
        .then((res) => {
            alert("방명록이 등록되었습니다. ପ( •̤ᴗ•̤ )੭⁾⁾.｡.:✽・ﾟ＋");
            window.location.reload(); //페이지 전체 새로고침
        })
        .catch((err) => {
            alert("방명록 등록에 실패하였습니다.");
            console.log(err);
        })
        }
    };

    return (
        <>
        <div className='guest-form'>
            <div className='division'/>
            <p><input id='namebox' onChange={nameChange} value={name} type='text' placeholder='Name'/></p>  {/* placeholder(가상요소에 속함) : input 안에 힌트주기 */}         
            <div className='division'/>
            <p><textarea id='contentsbox' onChange={contentsChange} value={contents} type='text' placeholder='Contents'/></p>      
            <div className='division'/>
        </div>

        <div className='guest-button'>
            <button onClick={onSubmit}>write</button> {/* alert만 사용하면 렌더링 될 때 작동이되어서 콜백함수를 넣음으로써 버튼 클릭 시 작동 되게 함 */}
        </div>
        </>
    )
}  // e 이벤트 : 특정행동 동작을 감지하는 api


export default GuestBook_post;