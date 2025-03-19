import { useParams, BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Main() {
    const { userId } = useParams();

    let content;
    if (userId === 'jjlee') {
        content = <div>jjlee님의 페이지입니다.</div>;
    } else if (userId === 'jhkim') {
        content = <div>jhkim님의 페이지입니다.</div>;
    } else if (userId === 'bmjo') {
        content = <div>bmjo님의 페이지입니다.</div>;
    } else {
        content = <div>사용자를 찾을 수 없습니다.</div>;
    }

    return (
        <div>
            {content}
            {/* 사용자별 추가 내용 */}
        </div>
    );
}

export default Main;