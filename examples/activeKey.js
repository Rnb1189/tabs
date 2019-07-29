/* eslint react/no-multi-comp:0, no-console:0, react/prop-types:0 */
import "rc-tabs/assets/index.less";
import React from "react";
import ReactDOM from "react-dom";
import Tabs, { TabPane } from "rc-tabs";
import TabContent from "rc-tabs/lib/SwipeableTabContent";
import ScrollableInkTabBar from "rc-tabs/lib/ScrollableInkTabBar";

const PanelContent = ({ id }) => (
  <div>
    {[1, 2, 3, 4].map(item => (
      <p key={item}>{id}</p>
    ))}
  </div>
);

class Demo extends React.Component {
  state = {
    activeKey: "1",
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
      <div style={{ margin: 20 }}>
        <h1>Simple Tabs1</h1>
        <Tabs
          renderTabBar={() => (
            <ScrollableInkTabBar onTabClick={this.onTabClick} />
          )}
          renderTabContent={() => <TabContent animatedWithMargin />}
          activeKey={this.state.activeKey}
          onChange={this.onChange}
        >
          <TabPane tab={`tab ${start}`} key="1">
            <PanelContent id={start} />
          </TabPane>
          <TabPane tab={`tab ${start + 1}`} key="2">
            <PanelContent id={start + 1} />
          </TabPane>
          <TabPane tab={`tab ${start + 2}`} key="3">
            <PanelContent id={start + 2} />
          </TabPane>
          <TabPane tab={`tab ${start + 3}`} key="4" disabled>
            <PanelContent id={start + 3} />
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
