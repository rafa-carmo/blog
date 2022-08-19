import Item from './Item'
import * as S from './styles'

const menuItems = {
  CATEGORY: {
    title: 'Categorias',
    subitems: []
  },
  FREE: {
    title: 'Materiais Gratuitos',
    subitems: null
  },
  REGISTER: {
    title: 'Receber noticias',
    subitems: null
  }
}

type MenuItemsProps = keyof typeof menuItems

export function Options() {
  return (
    <S.Wrapper>
      {Object.keys(menuItems).map((item) => (
        <Item
          label={menuItems[item as MenuItemsProps].title}
          key={item}
          hasSubItem={!!menuItems[item as MenuItemsProps].subitems}
        />
      ))}
    </S.Wrapper>
  )
}
