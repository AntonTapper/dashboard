import { User } from '@/graphql/schema.types'
import { Button, Card, ConfigProvider, Dropdown, MenuProps, theme } from 'antd'
import { Text } from '@/components/text'
import React, { useMemo } from 'react'
import { DeleteOutlined, EyeOutlined, MoreOutlined } from '@ant-design/icons'

type ProjectCardProps = {
    id: string,
    title: string,
    updatedAt: string,
    dueDate?: string,
    users?: {
        id: string,
        name: string,
        avatarUrl?: User['avatarUrl']
    }[]
}

const ProjectCard = ({ id, title, dueDate, users }: ProjectCardProps) => {

    const { token } = theme.useToken()

    const edit = () => {}

    const dropDownItems = useMemo(() => {
        const dropDownItems: MenuProps['items'] = [
            {
                label: 'View card',
                key: '1',
                icon: <EyeOutlined />,
                onClick: () => {
                    edit()
                }
            },
            {
                danger: true,
                label: 'Delete card',
                key: '2',
                icon: <DeleteOutlined />,
                onClick: () => {}
            }
        ]
        return dropDownItems
    }, [])

  return (
    <ConfigProvider
        theme={{
            components: {
                Tag: {
                    colorText: token.colorTextSecondary
                },
                Card: {
                    headerBg: 'transparent'
                }
            }
        }}
    >
        <Card
            size='small'
            title={<Text ellipsis={{ tooltip: title }}>{title}</Text>}
            onClick={() => edit()}
            extra={
                <Dropdown
                    trigger={["click"]}
                    menu={{
                        items: dropDownItems
                    }}
                    placement='bottom'
                    arrow={{ pointAtCenter: true }}
                >
                    <Button 
                        type='text'
                        shape='circle'
                        icon={
                            <MoreOutlined 
                                style={{
                                    transform: 'rotate(90deg)'
                                }}
                            />
                        }
                        onPointerDown={(e) => {
                            e.stopPropagation()
                        }}
                        onClick={(e) => {
                            e.stopPropagation()
                        }}
                    />
                </Dropdown>
            }
        >
            <div
            style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '8px'
            }}
            >
                
            </div>
        </Card>
    </ConfigProvider>
  )
}

export default ProjectCard