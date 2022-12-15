import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';
import TutorProfile from '../components/tutor/TutorProfile';
import ParentProfile from './parent/ParentProfile';

const Profile = () => {
    const dispatch = useDispatch();
    const userInfo = useSelector((state) =>
        state.userLogin.userInfo.length == 0 ? [] : state.userLogin.userInfo
    );
    return (
        <>
            <Header />
            <div>
                {userInfo.user.role == "tutor" ? (<TutorProfile userInfo={userInfo}/>) : (<ParentProfile userInfo={userInfo}/>)}
            </div>
            <Footer />
        </>
    )
}

export default Profile