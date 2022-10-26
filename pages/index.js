import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home({items, news}) {
  return (
    <>
      <div className='well-white'>
        <h5>Learn More From <br/> Keith Cunninham</h5>
        {/* {
          news.map(n => (
            <>
              <p>
                <a target="_blank" rel="noreferrer" href="http://keystothevault.com/events/">{n.text}</a>
              </p>
            </>
          ))
        } */}
        {
          items.map((n,i) => (
            <>
              <p>
                <a key={i} 
                target="_blank" 
                rel="noreferrer" 
                href={n.fields.demo3}>
                  {n.fields.nameOfNews}
                </a>
              </p>
            </>
          ))
        }
      </div>
    </>
  )
}

export async function getStaticProps(){
  
    const res = await fetch('https://cdn.contentful.com/spaces/dpfyxoc71hxt/environments/master/entries?access_token=_KjWIpr0v1hxJ-QIBjHE_RCJSZE5nTaUiV4BseFMzfk')
    const response = await res.json();
    const {items} = response

  

  const news = [
    {text: 'Plan or Get Slaughtered'},
    {text: '4-Day MBA'},
    {text: 'How to Buy or Exit a Business'}
  ]

  return{
    props:{
      items, news
    }
  }
}
