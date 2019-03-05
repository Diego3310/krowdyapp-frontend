import React, { Component } from "react";
import {
  Layout,
  Menu,
  Icon,
  PageHeader
} from "antd";

//Css
import "./Sider.css";

//Constants
const { Header, Sider, Content } = Layout;

const streamContraints = {
  audio: false,
  video: true
};

class SiderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      mediaStream: {}
    };
    this.fullBleedVideo = React.createRef();
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  componentDidMount() {
    this.getMediaStram();
  }

  async getMediaStram() {
    const mediaStream = await navigator.mediaDevices.getUserMedia(
      streamContraints
    );
    console.log(mediaStream);
    if (mediaStream.active) {
      this.setState(
        {
          mediaStream
        },
        () => (this.fullBleedVideo.current.srcObject = mediaStream)
      );
    }
  }

  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="light" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item>
              <Icon
                className="trigger"
                type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
                onClick={this.toggle}
              />
            </Menu.Item>
            <Menu.Item key="1">
              <Icon type="user" />
              <span>Mi Perfil</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: "#fff", padding: 0 }}>
                <PageHeader
                onBack={() => null}
                title="Video Cuestionario"
                subTitle="BCP - Sub Gerente de Ingienería de Defensa de Ciberseguridad"
              />
          </Header>
          <Content
            style={{
              padding: 32,
              paddingLeft: 0,
              paddingRight: 0,
              background: "#fff",
              minHeight: 280
            }}
          >
            <div className="video__container">
              <div className="video__header">
                <h4 className="cuestionario-para-di-copy">
                  Cuestionario para Diseñador UX/UI
                </h4>
              </div>
              <div className="video--content">
                <video autoPlay ref={this.fullBleedVideo} />
              </div>
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}
export default SiderComponent;
