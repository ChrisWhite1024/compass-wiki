import { Button, Layout, ConfigProvider, Icon } from 'antd';
import Link from "umi/link";
import styles from './index.css';
const { Header, Content, Footer, Sider } = Layout;



function BasicLayout(props) {
  return (
    <Layout>
        <Header style={{backgroundColor: 'black'}}>
            <div style={{float: 'left'}}>
                <text style={{color: 'white', fontSize: 'large', marginRight: '20px'}}>COMPASS 中文WIKI</text>
                <Link to="/">
                    <Button 
                    type='link' 
                    className={styles.Button}>
                    首页
                    </Button>
                </Link>
              <Button type='link' className={styles.Button} href='https://www.taptap.com/app/58706/topic'>社区</Button>
              <Button 
                type='link' 
                className={styles.Button} size='large' 
                href='https://github.com/ChrisWhite1024/compass-wiki'
                target={'_blank'}>
                Github
              </Button>
            </div>
            <div style={{float: 'right'}}>   
              <div>
              <ConfigProvider autoInsertSpaceInButton={false}>
                <Link to="/login">
                    <Button type='link' className={styles.Button}>
                    登录
                    </Button>
                </Link>
              </ConfigProvider>
              </div>
            </div>
        </Header>
        <Content>
          {props.children}
        </Content>
    </Layout>
  );
}

export default BasicLayout;
