import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home({news}) {
  return (
    <>
      <div className='well-white'>
        <h5>Learn More From <br/> Keith Cunninham</h5>
        {
          news.map(n => (
            <>
              <p>
                <a target="_blank" rel="noreferrer" href="http://keystothevault.com/events/">{n.text}</a>
              </p>
            </>
          ))
        }
      </div>
    </>
  )
}

export async function getStaticProps(){

  const news = [
    {text: 'Plan or Get Slaughtered'},
    {text: '4-Day MBA'},
    {text: 'How to Buy or Exit a Business'}
  ]

  return{
    props:{
      news
    }
  }
}
