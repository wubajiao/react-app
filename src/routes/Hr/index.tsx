/*
 * @Descripttion : 人才招聘
 * @Author       : wuhaidong
 * @Date         : 2024-04-08 14:21:41
 * @LastEditors  : wuhaidong
 * @LastEditTime : 2024-05-07 17:41:22
 */
import React from 'react'
import Banner from '@/components/Banner'
import Content from '@/components/Content'

import './index.less'

function Hr(props: any) {
  console.log('🚀 ~ Hr ~ props:', props)
  return (
    <div className='hr'>
      <Banner title='人才招聘' />
      <Content>
        <div className='header'>
          <div>人才招聘</div>
        </div>
        <div className='list'>
          <div className='item'>
            <div className='title'>岗位：java开发工程师</div>
            <div className='content'>
              <div className='requirement'>招聘要求：</div>
              <div className='requirement-content'>
                1、计算机、测绘、地理信息系统等相关专业本科以上学历，有GIS开发工作经验优先；
                <br />
                2、深入了解GIS理论知识，了解地理信息系统的基本原理，熟悉空间数据及影像图的处理技术，拥有WebGIS开发经验，至少熟悉SuperMap、ArcGIS其中之一优先；
                <br />
                3、熟练使用 SuperMap iDesktop 、iServer 或 ArcMap 、ArcGIS Server 进行地图服务编辑与发布；
                <br />
                4、熟练应用HTML5、CSS3、JavaScript等前端技术，对前端技术有浓厚兴趣者优先。
              </div>

              <div className='requirement'>岗位职责：</div>
              <div className='requirement-content'>
                1、参与产品和项目中GIS部分的需求分析、功能设计、文档撰写、代码开发；
                <br />
                2、部署运维相关的GIS服务；
                <br />
                3、Java后台代码开发。
              </div>

              <div className='requirement'>薪资：10-12K</div>
            </div>
          </div>
          <div className='item'>
            <div className='title'>岗位：前端开发工程师</div>
            <div className='content'>
              <div className='requirement'>招聘要求：</div>
              <div className='requirement-content'>
                1、计算机相关专业，本科以上学历，一年以上前端开发经验。
                <br />
                2、熟练掌握前端基础知识(html/css/js)
                <br />
                3、熟悉现代化前端开发技术，如: es6/webpack/vue
                <br />
                4、了解如下组件库，如iview、lodash、g2、d3、anime等
                <br />
                5、主动性强，自学能力强，遇到新知识能积极主动掌握
              </div>

              <div className='requirement'>岗位职责：</div>
              <div className='requirement-content'>
                1、基于vue框架从事公司web端/小程序开发
                <br />
                2、按照开发计划，协同其他同事一起工作，完成工作任务
                <br />
                3、遵循公司开发规范
              </div>

              <div className='requirement'>薪资：10-12K</div>
            </div>
          </div>
          <div className='item'>
            <div className='title'>岗位：销售经理</div>
            <div className='content'>
              <div className='requirement'>招聘要求：</div>
              <div className='requirement-content'>
                1. 计算机、安全、应急等相关专业或者市场营销专业本科以上；
                <br />
                2. 3年以上销售经验，不少于1年的政府类客户的销售经验，熟悉信息化集成方案的销售模式；
                <br />
                3. 具有大数据、云、人工智能、物联网、GIS等基础知识；
                <br />
                4. 优秀的市场分析判断力、抗压能力、领导力；
                <br />
                5. 过往有良好的直接销售成绩及重大项目的销售经验，有深厚的客户人脉关系优先考虑；
                <br />
                6. 有过智慧城市、智慧应急等相关行业销售经验优先考虑；
              </div>

              <div className='requirement'>岗位职责：</div>
              <div className='requirement-content'>
                1. 负责应急行业信息化项目的销售（应急，消防，企业安全等）；
                <br />
                2、负责开拓市场、发展合作伙伴，提升公司竞争优势；
                <br />
                3.
                对公司目标客户及所属行业的用户需求进行深入理解、交流、澄清、发掘相关业务领域的关键机会、同时牵引并推动重大项目的开拓及签约；
                <br />
                4. 负责行业内的国家政策分析及市场信息、竞争对手信息的收集与分析。
              </div>

              <div className='requirement'>薪资：10-12K</div>
            </div>
          </div>
          <div className='item'>
            <div className='title'>岗位：项目经理</div>
            <div className='content'>
              <div className='requirement'>招聘要求：</div>
              <div className='requirement-content'>
                1、本科及以上学历；
                <br />
                2、计算机科学与技术、软件工程类相关专业；
                <br />
                3、3年以上工作经验，1年以上信息化系统项目实施经历，有GIS项目管理经验优先考虑；
                <br />
                4、熟练使用Office，Project等项目管理软件；
                <br />
                5、善于沟通，敢于负责，优秀的自控能力，能适应长时间的出差。
              </div>

              <div className='requirement'>岗位职责：</div>
              <div className='requirement-content'>
                1、项目合同签订后负责项目实施，包括制定项目计划、管理项目范围和进度、保证项目质量等；
                <br />
                2、带领项目团队解决项目中发生的各项问题；
                <br />
                3、和其他部门协调沟通，确保项目进度按计划进行；
                <br />
                4、按照合同约定的时间、范围、质量向客户交付项目；
                <br />
                5、管理项目变更和项目风险，避免风险。
              </div>

              <div className='requirement'>薪资：10-12K</div>
            </div>
          </div>
          <div className='item'>
            <div className='title'>招聘通道</div>
            <div className='content'>
              <div className='requirement'>总部地址：XXXXXXX</div>
              <div className='requirement'>简历投递 ：XXX@qq.com</div>
            </div>
          </div>
        </div>
      </Content>
    </div>
  )
}
export default Hr
