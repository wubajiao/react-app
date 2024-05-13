/*
 * @Descripttion : 解决方案
 * @Author       : wuhaidong
 * @Date         : 2024-04-08 14:21:41
 * @LastEditors  : wuhaidong
 * @LastEditTime : 2024-05-13 17:27:28
 */
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectCoverflow } from 'swiper/modules'
import Banner from '@/components/Banner'
import Content from '@/components/Content'
import ContentFull from '@/components/ContentFull'
import ContentTitle from '@/components/ContentTitle'

import 'swiper/css'
import 'swiper/css/autoplay'

import './index.less'

import product1 from '@/assets/images/product1.png'
import product2 from '@/assets/images/product2.png'
import product3 from '@/assets/images/product3.png'
import product34 from '@/assets/images/product3_4.png'
import product4 from '@/assets/images/product4.png'
import product5 from '@/assets/images/product5.png'
import product6 from '@/assets/images/product6.png'
import product7 from '@/assets/images/product7.png'
import product8 from '@/assets/images/product8.png'
import product9 from '@/assets/images/product9.png'
import productTerminal1 from '@/assets/images/product_terminal1.png'
import productTerminal2 from '@/assets/images/product_terminal2.png'
import productTerminal3 from '@/assets/images/product_terminal3.png'
import productTerminal4 from '@/assets/images/product_terminal4.png'
import productSwiper1 from '@/assets/images/product_swiper1.png'
import productSwiper2 from '@/assets/images/product_swiper2.png'
import productSwiper3 from '@/assets/images/product_swiper3.png'
import productSwiper4 from '@/assets/images/product_swiper4.png'

const terminal = [
  { name: '智能安全帽', img: productTerminal1 },
  { name: '边缘计算平台', img: productTerminal2 },
  { name: '手持终端', img: productTerminal3 },
  { name: '无线传感器', img: productTerminal4 },
]

// 轮播数据
const swiperList = [
  {
    img: productSwiper1,
  },
  {
    img: productSwiper2,
  },
  {
    img: productSwiper3,
  },
  {
    img: productSwiper4,
  },
]

function Solution(props: any) {
  console.log('🚀 ~ Solution ~ props:', props)

  return (
    <div className='product'>
      <Banner title='产品研发' />
      <Content className='content1'>
        <ContentTitle text='工业互联网平台' id='productSection1' />
        <div className='about'>
          <div className='left'>
            <p>
              工业互联网平台以端到云一站式、云原生架构、低代码开发等核心理念，为园区、企业提供二次开发应用平台，实现数据可视化、设备资产绩效管理、人工智慧模型训练与部署、端到云的完整服务等，提升生产效率、降低运维成本，助力工业数字化转型。
            </p>
          </div>
          <div className='right'>
            <img src={product1} alt='' />
          </div>
        </div>
      </Content>
      <Content className='content2'>
        <ContentTitle text='实景三维数字化平台' id='productSection2' />
        <div className='about'>
          <div className='left'>
            <p>
              采用三维自动重建超算引擎技术，自主研发大规模实景三维集群建模软件、实景三维修模软件、实景三维浏览器、实景三维建模云平台和GIS平台产品，为全国大中城市、园区、企业提供高精度数据采集、三维精细建模、模型优化处理及应用的一站式服务。
              建立时空信息数据库，搭建真三维实景地图平台，提供二维及三维地图数据服务、通用工具及二次开发接口等功能，通过建设三维综合展示、视频感知实景地图、城市实景自动变化检测、三维地下管网展示等应用系统，引领政府各部门基于真三维实景地图开展行业深度应用,为城市大脑、各部门业务系统提供统一计算存储和网络安全资源的云计算中心。
            </p>
          </div>
          <div className='right'>
            <img src={product9} alt='' />
          </div>
        </div>
      </Content>
      <ContentFull>
        <Content className='content1'>
          <ContentTitle text='智能终端' id='productSection3' />
          <div className='terminal'>
            {terminal.map((item) => {
              return (
                <div className='item' key={item.name}>
                  <img src={item.img} alt='' />
                  <p>{item.name}</p>
                </div>
              )
            })}
          </div>
        </Content>
      </ContentFull>
      <Content className='content2'>
        <ContentTitle text='智能监控平台' id='productSection4' />
        <div className='monitor'>
          <p>
            设备健康状态智能监控平台，集振动、温度检测技术以及公司电气设备检测专利技术——“电流成份检测”于一体的设备状态在线监测系统，同时还可以接入企业已有的油液分析在线监测系统及其他实时监测系统，提供了统一的基于多参数数据融合分析的设备状态模型，实现了覆盖设备的机械部分、电气部分与润滑磨损部分的全面状态监测、分析、实时预警与故障诊断。
          </p>
          <p>1、以全生命周期设备管理系统、云端故障诊断系统两个系统为基础；</p>
          <p>2、以离线点检、在线监测为手段，实现全面覆盖生产线所有设备的状态管理:</p>
          <p>1）针对非关键设备、小型设备采用点检；</p>
          <p>2）针对大型机组、关键设备，以有线传感器、数据采集器、工业交换机组成有线在线监测系统；</p>
          <p>3）针对辅助机组、离散设备，以无线传感器、无线网关组成无线在线监测系统；</p>
          <p>
            3、以振动检测、红外测温、非接触测电流谐波，实现对设备的机械部分、电气部分健康状态的全面监测，实现设备的预知性维护。
          </p>
        </div>
      </Content>

      <ContentFull className='content2'>
        <div className='swiper-wrap'>
          <Swiper
            modules={[EffectCoverflow, Autoplay]}
            direction='horizontal'
            loop
            slidesPerView={3}
            autoplay={{
              delay: 3000,
            }}
            effect='coverflow'
          >
            {swiperList.map((item, index) => {
              return (
                <SwiperSlide key={`${index.toString()}`}>
                  <div className='swiper-slide'>
                    <img src={item.img} alt='' />
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </ContentFull>
      <Content className='content1'>
        <ContentTitle text='安全双控体系平台' id='productSection5' />
        <div className='monitor'>
          <p>充分利用互联网、GIS、大数据、人工智能等技术，构建智慧风险分级管控和隐患排查治理双重预防体系。</p>
          <p>
            建立安全隐患知识库，通过常态巡检和专项安全检查，完成现场安全隐患的排查、整改、验收等管理工作；同时结合日常隐患排查自动将事故隐患转化为安全风险值，实现定量化的风险分析与评估，形成红、橙、黄、蓝四级风险预警和风险电子地图。
          </p>
          <p>
            实现企业安全隐患排查、风险管控等各类安全管理工作提供科学决策依据，实现事故的事先管控、安全关口前移，实现企业安全管理信息来源可查、去向可追、责任可究、规律可循，创新构建动态化、精细化、智能化和现代化安全管理手段，为建立企业安全生产的长效机制创造有利条件。
          </p>
        </div>
        <div className='classification'>
          <div className='item'>
            <div>风险分级管控</div>
            <img src={product2} alt='' />
          </div>
          <div className='item'>
            <div>隐患排查</div>
            <img src={product34} alt='' />
          </div>
        </div>
      </Content>
      <Content className='content2'>
        <ContentTitle text='空间数据治理平台' id='productSection6' />
        <div className='monitor'>
          <p>
            空间数据治理平台汇集应急、地震、海洋、水利、住建、环保、林草等政府部门的空间数据，基于空间数据处理存储、空间数据服务等技术，构建面向国家、省、地（市）、县（区）级的全空间数据资源体系，实现空间数据解析入库、质检、预览和导出、处理、分析统计、共享服务等功能，支持对于海量空间数据智能分析挖掘和决策服务。
          </p>
        </div>
        <div className='classification'>
          <div className='item'>
            <div>矢量数据处理</div>
            <img src={product5} alt='' />
          </div>
          <div className='item'>
            <div>栅格数据处理</div>
            <img src={product6} alt='' />
          </div>
        </div>
        <div className='classification'>
          <div className='item'>
            <div>空间底图</div>
            <img src={product7} alt='' />
          </div>
          <div className='item'>
            <div>矢量数据处理</div>
            <img src={product8} alt='' />
          </div>
        </div>
      </Content>
    </div>
  )
}
export default Solution
