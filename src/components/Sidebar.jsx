import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import "../assets/styles/Sidebar.css";
import {
  FaHome, FaCertificate,
  FaGraduationCap, FaTruck, FaClipboardList,
  FaSlackHash, FaCheck, FaRoad, FaTrophy, FaBookmark
} from 'react-icons/fa';

export const Sidebar = ({ isOpen }) => {
  const sidebarRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const sidebar = sidebarRef.current;
    let scrollTimeout;

    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    };

    if (sidebar) {
      sidebar.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (sidebar) {
        sidebar.removeEventListener('scroll', handleScroll);
      }
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <div className={`sidebar-container ${isOpen ? 'show' : 'hide'}`}>
      <div
        ref={sidebarRef}
        id="sidebar"
        className={`sidebar ${isScrolling ? 'scrolling' : ''}`}
        tabIndex="0"
      >
        <ul className="sidebar-menu">
          <h5 className="centered">
            <span id="map-number">200280106047</span>
          </h5>
          <div className="centered">
            <NavLink to="/home" tabIndex="0">
              <img
                id="profile-img"
                className="profile-image"
                src="/images/Profile.jpg"
                alt="Profile"
              />
            </NavLink>
            <p className='profile-name'>PARMAR KULDIP</p>
          </div>

          {/* Sidebar Links */}
          <li><NavLink to="/home" className={({ isActive }) => isActive ? "active" : ""}><FaHome className="icon" /><span>Home</span></NavLink></li>
          <li><NavLink to="/certificate-request" className={({ isActive }) => isActive ? "active" : ""}><FaCertificate className="icon" /><span>Certificate Request</span></NavLink></li>
          <li><NavLink to="/activity-points" className={({ isActive }) => isActive ? "active" : ""}><FaSlackHash className="icon" /><span>100 Activity Points</span></NavLink></li>
          <li><NavLink to="/examform" className={({ isActive }) => isActive ? "active" : ""}><FaCertificate className="icon" /><span>Examform</span></NavLink></li>
          <li><NavLink to="/answer-sheet-view" className={({ isActive }) => isActive ? "active" : ""}><FaCertificate className="icon" /><span>Answer Sheet View</span></NavLink></li>
          <li><NavLink to="/convocation" className={({ isActive }) => isActive ? "active" : ""}><FaGraduationCap className="icon" /><span>Convocation</span></NavLink></li>
          <li><NavLink to="/recheck-history" className={({ isActive }) => isActive ? "active" : ""}><FaCheck className="icon" /><span>Recheck/Reassess History</span></NavLink></li>
          <li><NavLink to="/degree-verification" className={({ isActive }) => isActive ? "active" : ""}><FaGraduationCap className="icon" /><span>Degree Verification</span></NavLink></li>
          <li><NavLink to="/marksheet-tracker" className={({ isActive }) => isActive ? "active" : ""}><FaRoad className="icon" /><span>Marksheet Tracker</span></NavLink></li>
          <li><NavLink to="/certificate-tracking" className={({ isActive }) => isActive ? "active" : ""}><FaTruck className="icon flipped-icon" /><span>Certificate Tracking</span></NavLink></li>
          <li><NavLink to="/my-results" className={({ isActive }) => isActive ? "active" : ""}><FaCertificate className="icon" /><span>My Results</span></NavLink></li>
          <li><NavLink to="/grade-history" className={({ isActive }) => isActive ? "active" : ""}><FaTrophy className="icon" /><span>Grade History</span></NavLink></li>
          <li><NavLink to="/payment-status" className={({ isActive }) => isActive ? "active" : ""}><FaBookmark className="icon" /><span>Check Payment Status</span></NavLink></li>
          <li><NavLink to="/prc-fees" className={({ isActive }) => isActive ? "active" : ""}><FaBookmark className="icon" /><span>PRC (Affiliation) Fees</span></NavLink></li>
          <li><NavLink to="/logs" className={({ isActive }) => isActive ? "active" : ""}><FaBookmark className="icon" /><span>View my last 10 logs</span></NavLink></li>
          <li><NavLink to="/my-results-2" className={({ isActive }) => isActive ? "active" : ""}><FaClipboardList className="icon" /><span>My Results</span></NavLink></li>
        </ul>
      </div>
    </div>
  );
};
