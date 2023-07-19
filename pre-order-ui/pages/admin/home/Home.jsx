import React from "react";
import "./home.scss";
import { Sidebar } from "../../../components/admin/sidebar/Sidebar";
import { Navbar } from "../../../components/admin/navbar/Navbar";
import { Widget } from "../../../components/admin/widgets/Widget";
import { Chart } from "../../../components/admin/chart/Chart";
import { List } from "../../../components/admin/table/Table";

export const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div>
          <Chart/>
        </div>
        <div>
          <List/>
        </div>
      </div>
    </div>
  );
};
