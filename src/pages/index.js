import styles from './index.css';
import { Row, Col, List, Layout, Breadcrumb } from 'antd'
import QueueAnim from 'rc-queue-anim';
import Link from 'umi/link';
const { Header, Content, Footer, Sider } = Layout;

export default function() {
  const data = [
    {
      title: '指南',
      titlehref: '/',
      description: [
        {title: '游戏下载与安装', titlehref: '/get_start'},
        {title: '基本操作指南', titlehref: '/basic_game_guide'},
        {title: '任务指南', titlehref: '/mission_guide'},
        {title: '术语表', titlehref: '/glossary'}
      ]
    },
    {
      title: '英雄',
      titlehref: '/',
      description: [
        {title: '拳职', titlehref: '/attackers'},
        {title: '枪职', titlehref: '/gunners'},
        {title: '盾职', titlehref: '/tanks'},
        {title: '跑职', titlehref: '/sprinters'},
        {title: '原画', titlehref: '/collaboration'},
        {title: '语音', titlehref: '/voice'},
        {title: '角色曲', titlehref: '/music'},
        {title: '英雄平衡更新', titlehref: '/hero_balance_updates'}
      ]      
    },
    {
      title: '游戏系统',
    },
    {
      title: '卡组',
    },
    {
      title: '来玩点小游戏吧',
      titlehref: '/game'
    }
  ];

  return (
  <QueueAnim type='bottom'>
    <div className={styles.bg} key='1'>
      <QueueAnim type='left'>
      <Row gutter={16}>
        <Col span={12}>
          <div className={styles.boxNormal}>
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  title={<a href={item.titlehref} style={{color: 'white', fontSize: 'large'}}>{item.title}</a>}
                  description={
                    <Breadcrumb>
                    {item.description && item.description.map((desc, index) => {
                      return (
                        <Breadcrumb.Item key={index}>
                          <Link to={'/passage' + desc.titlehref}>
                            <a>{desc.title}</a>
                          </Link>
                        </Breadcrumb.Item>
                      );
                    })}
                    </Breadcrumb>
                  }
                />
              </List.Item>
            )}
            className={styles.List}
          />
          </div>
        </Col>
          
        <Col span={12}>
          <div className={styles.boxNormal} key='1'>
            <p style={{fontFamily: 'system-ui', fontSize: '30px', float: 'left', color: 'white'}}>COMPASS 新闻</p>
            <List 
              itemLayout="vertical"
              size="large">
              
            </List>
          </div>    
        </Col>
      </Row>
      </QueueAnim>
    </div>
    </QueueAnim>  
  );
}
