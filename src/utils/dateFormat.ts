import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

type dateFormatProps = {
  date: string | Date
  type?: 'show' | 'seo'
}

export function dateFormat({ date, type = 'show' }: dateFormatProps) {
  const dateObject = () => {
    if (typeof date === 'string') {
      return new Date(date)
    }
    return date
  }
  if (type === 'show') {
    return format(dateObject(), "d' de 'MMMM' de 'yyyy'", {
      locale: ptBR
    })
  }

  return format(dateObject(), "yyyy'-'MM'-'d' 'HH:mm'")
}
