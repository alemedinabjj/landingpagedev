import { Card, ContainerCard, NumberDescription, TitleDescription } from './styles'

const CardCustomer = () => {
  return (
    <ContainerCard>
      <Card>
        <TitleDescription>
          PRODUCT
        </TitleDescription>
        <NumberDescription>
          10.000 +
        </NumberDescription>
      </Card>
      <Card>
        <TitleDescription>
          LIKES
        </TitleDescription>
        <NumberDescription>
          45600
        </NumberDescription>
      </Card>
      <Card>
        <TitleDescription>
          SALE
        </TitleDescription>
        <NumberDescription>
          576864
        </NumberDescription>
      </Card>
      <Card>
        <TitleDescription>
          CUSTOMERS
        </TitleDescription>
        <NumberDescription>
          947444
        </NumberDescription>
      </Card>
    </ContainerCard>
  )
}

export default CardCustomer