import React,{ useState } from 'react';
import QueueAnim from 'rc-queue-anim';
import styles from './login.css'
import { Button, Col, Divider, Input, Row } from 'antd'

function Login() {
    return (
    <QueueAnim type='left' duration={1000} interval={1000}>
        <div className={styles.bg} key="1">
        <QueueAnim>
        <div className={styles.box} key="1">
            
                <p style={{fontFamily: 'system-ui', fontSize: 'large', float: 'left', opacity: '0.9', color: 'white'}}>一绪に，康帕斯！</p>
                <Input placeholder='ID' className={styles.Input}></Input>
                <div style={{height: '20px'}}></div>
                <Input placeholder='密码' className={styles.Input}></Input>
                <div style={{height: '20px'}}></div>
                <Button type="primary" size='large' className={styles.Button}>
                登录
                </Button>
                <Divider style={{backgroundColor: 'black'}}/>
                <p style={{fontFamily: 'system-ui', fontSize: 'medium', float: 'left', opacity: '0.9', color: 'white'}}>还未注册？点击这里</p>
                <Button type="primary" size='large' className={styles.Button}>
                注册
                </Button>
            
        </div>
        </QueueAnim>
        </div>
    </QueueAnim>

    );
}

export default Login;
  