import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js'
import { Statistic, Row, Col } from 'antd'
import classes from './Statistics.module.scss'

// Регистрация компонентов для Chart.js
ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend)

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'Сегодня',
      data: [65, 59, 80, 81, 56, 55],
      borderColor: '#8884d8',
      backgroundColor: 'rgba(136, 132, 216, 0.5)',
      pointStyle: 'rect',
      pointRadius: 10,
      pointBorderColor: '#8884d8',
      pointBackgroundColor: '#fff',
    },
    {
      label: 'Ночьные выходы',
      data: [28, 48, 40, 19, 86, 27],
      borderColor: '#82ca9d',
      backgroundColor: 'rgba(130, 202, 157, 0.5)',
      pointStyle: 'triangle',
      pointRadius: 10,
      pointBorderColor: '#82ca9d',
      pointBackgroundColor: '#fff',
    },
    {
      label: 'За все время',
      data: [45, 67, 85, 70, 50, 40],
      borderColor: '#ff4d4f',
      backgroundColor: 'rgba(255, 77, 79, 0.5)',
      pointStyle: 'circle',
      pointRadius: 10,
      pointBorderColor: '#ff4d4f',
      pointBackgroundColor: '#fff',
    },
  ],
}

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    tooltip: {
      usePointStyle: true,
      callbacks: {
        labelPointStyle: () => {
          return {
            pointStyle: 'rectRot',
            rotation: 0,
          }
        },
      },
    },
  },
  scales: {
    x: {
      beginAtZero: true,
    },
    y: {
      beginAtZero: true,
    },
  },
}

const Statistics = () => {
  return (
    <>
      <div className={classes.size}>
        <div className={classes.flex}>
          <h3>Аналитика заказов: </h3>
          <div className={classes.antd}>
            <Row gutter={16}>
              <Col span={8}>
                <Statistic title='Active Users' value={112893} />
              </Col>
              <Col span={8}>
                <Statistic title='Account Balance (CNY)' value={112893} precision={2} />
              </Col>
              <Col span={8}>
                <Statistic title='Active' value={11.28} precision={2} prefix='%' />
              </Col>
            </Row>
          </div>
        </div>
        <div className={classes.mainBlock}>
          <Line data={data} options={options} width={1000} height={300} />
        </div>
      </div>
    </>
  )
}

export default Statistics
