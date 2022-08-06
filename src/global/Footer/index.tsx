
import { Button } from '../../components/Navbar/styles'
import { ContainerGlobal } from '../../globalStyle'
import { Input } from '../../pages/NewsLetter/styles'
import { ContentResources, ContentResourcesItem, Subscribe } from './style'

const Footer = () => {
  return (
    <ContainerGlobal>
      <ContentResources>
        <ContentResourcesItem>
          <h5>Home</h5>
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Community</a></li>
            <li><a href="">Events</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        </ContentResourcesItem>
        <ContentResourcesItem>
          <h5>Resources</h5>
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Community</a></li>
            <li><a href="">Events</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        </ContentResourcesItem>
        <ContentResourcesItem>
          <h5>Community</h5>
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Community</a></li>
            <li><a href="">Events</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        </ContentResourcesItem>
        <ContentResourcesItem>
          <h5>Main links</h5>
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Community</a></li>
            <li><a href="">Events</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        </ContentResourcesItem>
      <Subscribe>
       <div>
       <h5>Subscribe to our newsletter</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <form>
          <input type="email" placeholder="Seu email" />
          <button>Assinar</button>
        </form>
       </div>
      </Subscribe>
      </ContentResources>
    </ContainerGlobal>
  )
}

export default Footer