import React, { Component } from "react";
import NavTabs from "./NavTabs";
import About from "./pages/About";
import Discover from "./pages/Discover";
import Search from "./pages/Search";

class PageContainer extends Component {
  state = {
    currentPage: "About"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "About") {
      return <About />;
    } else if (this.state.currentPage === "Discover") {
      return <Discover />;
    } else if (this.state.currentPage === "Search") {
      return <Search />;
    } else {
      return <About />
    }
  }

  render() {
    return (
      <div>
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />

      </div>
    );
  }
}

export default PageContainer;