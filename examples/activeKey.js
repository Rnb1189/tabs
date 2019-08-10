/* eslint react/no-multi-comp:0, no-console:0, react/prop-types:0 */
import "rnb-rc-tabs/assets/index.less";
import React from "react";
import ReactDOM from "react-dom";
import Tabs, { TabPane } from "rnb-rc-tabs";
import TabContent from "rnb-rc-tabs/lib/SwipeableTabContent";
import ScrollableInkTabBar from "rnb-rc-tabs/lib/ScrollableInkTabBar";
import SwipeableInkTabBar from "rnb-rc-tabs/lib/SwipeableInkTabBar";

const PanelContent = ({ id }) => (
  <div>
    {[1, 2, 3, 4, 5, 6].map(item => (
      <p key={item}>{id}</p>
    ))}
  </div>
);

class Demo extends React.Component {
  state = {
    activeKey: "6",
    start: 0,
    rtl: false
  };

  onChange = activeKey => {
    console.log(`onChange ${activeKey}`);
    this.setState({
      activeKey
    });
  };

  onTabClick = key => {
    console.log(`onTabClick ${key}`);
    if (key === this.state.activeKey) {
      this.setState({
        activeKey: ""
      });
    }
  };

  tick = () => {
    this.setState({
      start: this.state.start + 10
    });
  };

  handleNotExistKey = () => {
    this.setState({
      activeKey: "-1"
    });
  };
  handleRtl = () => {
    this.setState(state => {
      return { ...state, rtl: !state.rtl };
    });
  };
  render() {
    const start = 1;
    // const start = this.state.start;
    var isRtl = this.state.rtl;
    return (
      <div style={{ margin: 20, height: 800 }}>
        <h1>Simple Tabs1</h1>
        <Tabs
          isRtl={isRtl}
          tabBarPosition={"right"}
          renderTabBar={() => (
            // <SwipeableInkTabBar onTabClick={this.onTabClick} />
            <ScrollableInkTabBar onTabClick={this.onTabClick} />
          )}
          renderTabContent={() => <TabContent animatedWithMargin />}
          activeKey={this.state.activeKey}
          onChange={this.onChange}
        >
          <TabPane tab={`tab ${start}`} key="1">
            <PanelContent id={start} />
          </TabPane>
          <TabPane tab={`امید عبد ${start + 1}`} key="2">
            <PanelContent id={start + 1} />
          </TabPane>
          <TabPane tab={`tab e ${start + 2}`} key="3">
            <PanelContent id={start + 2} />
          </TabPane>
          <TabPane tab={`tab ${start + 3}`} key="4">
            <PanelContent id={start + 3} />
          </TabPane>
          <TabPane tab={`tab ${start + 4}`} key="5">
            <PanelContent id={start + 4} />
          </TabPane>
          <TabPane tab={`tab ${start + 5}`} key="6">
            <PanelContent id={start + 5} />
          </TabPane>
        </Tabs>
        <button onClick={this.tick}>rerender</button>
        <button onClick={this.handleNotExistKey} style={{ marginLeft: 10 }}>
          change to a non-existent activeKey
        </button>
        <button onClick={this.handleRtl} style={{ marginLeft: 10 }}>
          {isRtl ? "R t l" : "L t r"}
        </button>
        <div>{this.state.activeKey}</div>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, document.getElementById("__react-content"));
