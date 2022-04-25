import styles from './index.css';
import { Row, Col, List, Layout, Breadcrumb, Divider, Card } from 'antd'
import QueueAnim from 'rc-queue-anim';
import Link from 'umi/link';
import { isImageUrl } from 'antd/lib/upload/utils';
const { Header, Content, Footer, Sider } = Layout;

export default function() {
  const data = [
    {
      title: '指南',
      description: [
        {title: '游戏下载与安装', titlehref: '/get_start'},
        {title: '基本操作指南', titlehref: '/basic_game_guide'},
        {title: '任务指南', titlehref: '/mission_guide'},
        {title: '术语表', titlehref: '/glossary'}
      ]
    },
    {
      title: '英雄',
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
      description: [
        {title: '属性', titlehref: '/attributes'},
        {title: '会员', titlehref: '/prime'},
        {title: '排位', titlehref: '/ranking'},
        {title: '技能卡等级提升', titlehref: '/limit_break'},
        {title: '技能卡', titlehref: '/cards'}
      ]      
    },
    {
      title: '卡组',
      description: [
        {title: '种类', titlehref: '/card_types'},
        {title: '世界观', titlehref: '/card_theme'}
      ]            
    },
    {
      title: '来玩点小游戏吧 ( •̀ ω •́ )✧',
      titlehref: 'http://1.116.123.133:86/'
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
                            <a style={{color: 'white', opacity: '0.5'}}>{desc.title}</a>
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
          <News />
        </Col>
      </Row>
      </QueueAnim>
    </div>
    </QueueAnim>
  );
}

function News() {
  return (
  <div className={styles.boxNormal} key='1'>
    <Row>
      <Col>
        <p style={{fontFamily: 'system-ui', fontSize: '30px', float: 'left', color: 'white'}}>COMPASS 新闻</p>
      </Col>
    </Row>
    <Row>
      <Col>
        <Card className={styles.card} bordered={false}>
          <Link to={'/login'}>
            <Card.Grid className={styles.cardgrid}>
              <Row>
                <Col span={6}>
                <p style={{color: 'white'}}>7天前</p>
                </Col>
                <Col span={18}>
                <p style={{color: 'white', float: 'right'}}>维护更新内容详情</p>  
                </Col>
              </Row>
              <div className={styles.clickBox} style={{backgroundImage: "url("+"https://s1.ax1x.com/2022/04/25/LoJb9I.jpg"+")"}}/>
            </Card.Grid>
          </Link>
          <Link to={'/login'}>
            <Card.Grid className={styles.cardgrid}>
              <Row>
                <Col span={6}>
                <p style={{color: 'white'}}>9天前</p>
                </Col>
                <Col span={18}>
                <p style={{color: 'white', float: 'right'}}>Live Arena官方推特与官方网站现已公开</p>  
                </Col>
              </Row>
              <div className={styles.clickBox} style={{backgroundImage: "url("+"https://s1.ax1x.com/2022/04/25/LohJUJ.jpg"+")"}}/>
            </Card.Grid>
          </Link>
          <Link to={'/login'}>
            <Card.Grid className={styles.cardgrid}>
              <Row>
                <Col span={6}>
                <p style={{color: 'white'}}>24天前</p>
                </Col>
                <Col span={18}>
                <p style={{color: 'white', float: 'right'}}>樱华忠臣主题赛季预告</p>  
                </Col>
              </Row>
              <div className={styles.clickBox} style={{backgroundImage: "url("+"https://s1.ax1x.com/2022/04/25/LohOx0.jpg"+")"}}/>
            </Card.Grid>
          </Link>
        </Card>
      </Col>
    </Row>

  </div>        
  );
}