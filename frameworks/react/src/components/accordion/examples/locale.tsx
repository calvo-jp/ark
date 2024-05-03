import { ChevronDownIcon } from 'lucide-react'
import { Accordion } from '../..'
import { LocaleProvider } from '../../../providers'

export const Locale = () => (
  <LocaleProvider defaultLocale="ar-AE">
    <Accordion.Root>
      {['React', 'Solid', 'Vue'].map((item) => (
        <Accordion.Item key={item} value={item}>
          <Accordion.ItemTrigger>
            What is {item}?
            <Accordion.ItemIndicator>
              <ChevronDownIcon />
            </Accordion.ItemIndicator>
          </Accordion.ItemTrigger>
          <Accordion.ItemContent>
            {item} is a JavaScript library for building user interfaces.
          </Accordion.ItemContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  </LocaleProvider>
)