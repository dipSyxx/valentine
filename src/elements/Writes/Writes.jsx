import { FlippingPages } from 'flipping-pages'
import 'flipping-pages/dist/style.css'
import { useState } from 'react'
import clsx from 'clsx'

import styles from './Writes.module.sass'

export const Writes = () => {
  const [selected, setSelected] = useState(0)

  const back = () => {
    setSelected((selected) => Math.max(selected - 1, 0))
  }

  const next = () => {
    setSelected((selected) => Math.min(selected + 1, 2))
  }

  return (
    <div>
      <div className={styles.pages}>
        <FlippingPages
          direction="right-to-left"
          swipeSpeed={1000}
          swipeLength={600}
          onSwipeEnd={setSelected}
          selected={selected}
        >
          <div className={clsx(styles.page, styles.page1)}>
            <h1 className={styles.title}>З днем святого Валентина коть!</h1>
            <div className={styles.heart}></div>
            <div className={styles.text}>
              Привіт моє сонечко, ця невеличка откриточка для тебе,хочу тебе привітати з днем святого Валентина!! Адже в
              цей день закохані чи влюбльоні зачасту признаються в своїх почуттях,тому ця откриточка для тебе!!
              <i className={clsx(styles.heart_icon, 'fa-solid fa-heart')} />
            </div>
            <div className={styles.arrow}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className={clsx(styles.page, styles.page2)}>
            <h1 className={styles.title}>З днем святого Валентина коть!</h1>
            <div className={styles.heart}></div>
            <div className={styles.text}>
              Минуло вже досить багато часу як я повідав тебе хехе ще з 7 класу ти мені симпатизувала дуже і дуже
              сильно,всі ці роки з 7-го по 9-ий клас я боявся підійти до тебе і банально просто заговорити,але в один
              прекрасний по-моєму осінній шкільний день 9 класу, ви нам предлагаєте піти з вам в технікум на
              волейбол,але боже як же ти мені подобалась тоді мммм.. словам передати не можна,що яку бурю емоцій я
              відчував коли дивився на тебе хіхі, так от з тих пір моє життя змінилось кардинально, сама доля мені
              приподнесла мені такий шанс зблизитись з тобою! Звісно у відносинах я нічого не розумів і все було на
              інстинктном рівні там якісь знак подавав намьоки і тд щоб ти мене примітила побачила :3 Старався тобі
              якісь вкусншяки купувати ділитись старався з тобою заговорити,але дуже дуже боявсяяяя ааа я не можу
              передати цих почуттів,дивлячись на тебе і тоді і зараз я впевнено можу сказати що ти особлива коть!
              <i className={clsx(styles.heart_icon, 'fa-solid fa-heart')} />
              ...
            </div>
            <div className={styles.arrow}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className={clsx(styles.page, styles.page3)}>
            <h1 className={styles.title}>З днем святого Валентина коть!</h1>
            <div className={styles.heart}></div>
            <div className={styles.text}>
              Я використав цю нагоду, яка дала мені доля я признався тобі в почуттях хехе ти зразу подумала що це якась
              шутка чи пранк але то було серйозно я зібрав волю в кулак і признався тобі в своїх почуттях, потім ми так
              же спілкувались наче нічого і не було хахаха,ми далі спілкувались спілкувались йшли дні було все ахуєно і
              потім хуху я тебе зву зустрітись,це просто аоаоаоао це для мене щось не реальне хахаха я таким залупишом
              тоді був мені погуляти з дівчною на одинці даже не снилось,ніколи не зубуду той день він дав той толчок і
              те що ми зараз маєм..хех у підсумок хочу сказати,сонце, я неймовірно щасливий і нейомовірно радий що я
              тебе зустрів і в нас вийшло поладити хіхі,ти моя радість одна єдина, дякую що робила і робиш для мене і
              для наших відносин,ти правда дуже неймовірна,чарівна,розумна,няшка моя хіхі,з кожним днем моє кохання до
              тебе стає все більше і більше і я не капільки не сумніваюсь в тобі і ніколи навіть думок про сумніви не
              було і я можу з впевненістю сказати що ти та сама людина яка мені потрібна я ніколи і ні з ким не почував
              себе так добре,комфортно і тепло, як з тобою,ти і є моє щастя!
            </div>
            <div className={clsx(styles.arrow)}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className={clsx(styles.page, styles.page3)}>
            <h1 className={styles.title}>З днем святого Валентина коть!</h1>
            <div className={styles.heart}></div>
            <div className={styles.text}>
              Зараз наші відносини переживають не самі кращі дні( так як ми на відстані а відносини на відстані це дуже
              і дуже важко,якщо брати середньостатистисну пару то б вперший місяць пара б вже розлучилась тому що не
              витримують такого тиску під назвою 'відстань'. А ми коть особливі, не дивлячись на відстань на
              проблеми,конфлікти,сварки,ми разом, котькааа ми разом!! якщо відносини пройшли цю відстань то ці віднсини
              буквально нічим звалити зруйнтувати, тому що обидва довели що навіть дистанція у відносинах ніпочом :3 Ми
              дуже довго були на відстані, взагальному буквально 8 чи 9 місяців це ультра багато але за ці дні я багато
              чого зрозумів і багато чого узнав і тільки ти даєш мені повод рухатись і розвиватися далі я хочу тебе
              зробити найщасливішою у світі я хочу подарувати тобі яскраве життя без битовуху, по максимум на скільки це
              можливо подорожувати відпочивати і кайфувати від життя у двох або з друзями хехе. ТИ КИЦЯ МОЯ!! я обожнюю
              тебе до незтями.У нас вийшло зробити цей крок зламати мать шоб вона погодилась на те щоб я полетів до
              тебе..буквально рік на це потребувалось і якщо зрівняти її відношення до цього, тоді і зараз,воно
              кардинально помінялось в неї аж очі світяться після того як з батьком поговорили твоїм,боже а який радий,
              але сказати що я радий це зовсім нічого не сказати хахаха Я ДО У СРАЧКИ ЩАСЛИВИЙ І РАДИЙ ЩО БУКВАЛЬНО
              ЧЕРЕЗ МІСЯЦЬ Я ЗМОЖУ ПОБАЧИТИ ТЕБЕ!!!! ми змогли... і ця відстань у наших відносинах розтовриться як
              сахарна вата у гарячій воді хіхі. <i className={clsx(styles.heart_icon, 'fa-solid fa-heart')} />
              <i className={clsx(styles.heart_icon, 'fa-solid fa-heart')} />
              <i className={clsx(styles.heart_icon, 'fa-solid fa-heart')} />
            </div>
            <div className={clsx(styles.arrow)}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className={clsx(styles.page, styles.page3)}>
            <h1 className={styles.title}>З днем святого Валентина коть!</h1>
            <div className={styles.heart}></div>
            <div className={styles.text}>
              <h1 style={{ lineHeight: '1.5em' }}>
                Я КОХАЮ ТЕБЕ І ЗАВЖДИ БУДУ ТЕБЕ КОХАТИ ДО КІНЦЯ СВОЇХ ДНІВ МОЯ МАЛЕНЬКА ТИ КИЦІНЬКА!! цьомкаю в губки, я
                скоро приїду до тебе лишилось ще трішки
                <i className={clsx(styles.heart_icon, 'fa-solid fa-heart')} />
              </h1>
            </div>
            <div className={clsx(styles.arrow, styles.arrow_end)}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </FlippingPages>
      </div>
    </div>
  )
}
