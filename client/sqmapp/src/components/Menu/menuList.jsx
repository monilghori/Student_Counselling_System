import { useState } from "react";
import { Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import GroupsIcon from "@mui/icons-material/Groups";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import PublicIcon from "@mui/icons-material/Public";
import ChecklistRtlIcon from "@mui/icons-material/ChecklistRtl";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import "./menuList.css";

const MenuList = () => {
  const location = useLocation();
  const isStudent = JSON.parse(localStorage.getItem("isStudent"))?.role;
  const isFaculty = JSON.parse(localStorage.getItem("isFaculty"))?.role;

  const [selectedKey, setSelectedKey] = useState(location.pathname);

  const handleMenuClick = ({ key }) => {
    setSelectedKey(key);
  };

  return (
    <Menu
      mode="inline"
      className="menu-bar"
      theme="light"
      selectedKeys={[selectedKey]}
      onClick={handleMenuClick}
    >
      {isStudent === "student" && (
        <>
          <Menu.Item
            key="/groupprofile"
            icon={<GroupsIcon />}
            className="custom-menu-item"
          >
            <Link to="/groupprofile">Group Profile</Link>
          </Menu.Item>

          <Menu.SubMenu
            key="questions"
            icon={<QuestionAnswerIcon />}
            title="Questions"
            className="custom-menu-item"
          >
            <Menu.Item key="/myquestion">
              <Link to="/myquestion">My Questions</Link>
            </Menu.Item>

            <Menu.Item key="/publicquestion">
              <Link to="/publicquestion">Public Questions</Link>
            </Menu.Item>
          </Menu.SubMenu>

          <Menu.Item
            key="/askmentor"
            icon={<QuestionMarkIcon />}
            className="custom-menu-item"
          >
            <Link to="/askmentor">Ask Mentor</Link>
          </Menu.Item>

          <Menu.Item
            key="/askgpt"
            icon={<BubbleChartIcon />}
            className="custom-menu-item"
          >
            <Link to="/askgpt">Ask Gpt</Link>
          </Menu.Item>
        </>
      )}

      {isFaculty === "faculty" && (
        <>
          <Menu.Item
            key="/studentlist"
            icon={<GroupsIcon />}
            className="custom-menu-item"
          >
            <Link to="/studentlist">Students</Link>
          </Menu.Item>

          <Menu.SubMenu
            key="questions"
            icon={<QuestionAnswerIcon />}
            title="Questions"
            className="custom-menu-item"
          >
            <Menu.Item key="/askedquestion">
              <Link to="/askedquestion">Your Question</Link>
            </Menu.Item>

            <Menu.Item key="/publicquestion">
              <Link to="/publicquestion">Public Questions</Link>
            </Menu.Item>
          </Menu.SubMenu>

          <Menu.Item
            key="/askfaculty"
            icon={<PublicIcon />}
            className="custom-menu-item"
          >
            <Link to="/askfaculty">Asked to Faculty</Link>
          </Menu.Item>

          <Menu.Item
            key="/sharedbyother"
            icon={<ChecklistRtlIcon />}
            className="custom-menu-item"
          >
            <Link to="/sharedbyother">Shared by other</Link>
          </Menu.Item>
        </>
      )}
    </Menu>
  );
};

export default MenuList;
