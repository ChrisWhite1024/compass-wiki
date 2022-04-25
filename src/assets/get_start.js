import { Typography } from "antd";
import Paragraph from "antd/lib/typography/Paragraph";
import Title from "antd/lib/typography/Title";
import QueueAnim from "rc-queue-anim";


function Get_Start() {
    return (
        <QueueAnim
        type={['right', 'left']}
        ease={['easeOutQuart', 'easeInOutQuart']}>
            <Typography key='0'>
                <Title key='1'>安装与下载</Title>
                <Paragraph key='2'>还没添加内容（悲）</Paragraph>
            </Typography>
        </QueueAnim>

    )
}

export default Get_Start;