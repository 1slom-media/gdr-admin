import React, { Children } from 'react'
import { Button, Drawer, Space } from 'antd';
import { useState } from 'react';

const DraverCommon = ({ title, onClose, open, children, addBtn }) => {


    return (
        <>
            <Drawer
                title={title}
                placement="right"
                width={1200}
                onClose={onClose}
                open={open}
                extra={
                    <Space>
                        <Button style={{borderRadius: "50px" }} danger onClick={onClose}>Отменить</Button>
                    </Space>
                }
            >
                {children}
            </Drawer>
        </>
    )
}

export default DraverCommon