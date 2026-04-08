'use client'

import { useEffect, useRef } from 'react'

type ShopifyBuildClientOptions = {
  domain: string
  storefrontAccessToken: string
}

type ShopifyClient = unknown

interface ShopifyComponent {
  destroy?: () => void
}

type ShopifyComponentType = 'collection' | 'product' | string

type ShopifyCreateComponentOptions = {
  id: string | number
  node: HTMLElement
  moneyFormat?: string
  options?: Record<string, unknown>
}

interface ShopifyUI {
  onReady: (client: ShopifyClient) => Promise<{
    createComponent: (
      type: ShopifyComponentType,
      options: ShopifyCreateComponentOptions
    ) => ShopifyComponent
  }>
}

interface ShopifyBuyNS {
  buildClient: (options: ShopifyBuildClientOptions) => ShopifyClient
  UI: ShopifyUI
}

declare global {
  interface Window {
    ShopifyBuy?: ShopifyBuyNS
  }
}

const SHOPIFY_SCRIPT_SRC =
  'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js'

const ShopifyList = () => {
  const initedRef = useRef(false)
  const uiInstanceRef = useRef<ShopifyComponent | null>(null)
  const scriptId = 'shopify-buy-button-sdk'

  useEffect(() => {
    if (initedRef.current) return
    initedRef.current = true

    let appendedScript: HTMLScriptElement | null = null

    const init = async () => {
      if (!window.ShopifyBuy || !window.ShopifyBuy.UI) return

      const client = window.ShopifyBuy.buildClient({
        domain: 'ica20r-it.myshopify.com',
        storefrontAccessToken:
          process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN ?? '',
      })

      const ui = await window.ShopifyBuy.UI.onReady(client)
      const target = document.getElementById(
        'collection-component-1754018041708'
      )
      if (!target) return

      uiInstanceRef.current = ui.createComponent('collection', {
        id: '494747156776',
        node: target,
        moneyFormat: '%C2%A5%7B%7Bamount_no_decimals%7D%7D',
        options: {
          product: {
            styles: {
              title: { color: '#ffffff' },
              price: { color: '#ffffff' },
              compareAt: { color: '#ffffff' },
              product: {
                '@media (min-width: 601px)': {
                  'max-width': 'calc(50% - 20px)',
                  'margin-left': '20px',
                  'margin-bottom': '50px',
                  width: 'calc(50% - 20px)',
                },
                '@media (max-width: 768px)': {
                  width: '90%',
                  'margin-bottom': '30px',
                },
                img: {
                  height: 'calc(100% - 15px)',
                  position: 'absolute',
                  left: '0',
                  right: '0',
                  top: '0',
                },
                imgWrapper: {
                  'padding-top': 'calc(95% + 15px)',
                  position: 'relative',
                  height: '0',
                },
              },
              button: {
                'font-size': '16px',
                'padding-top': '16px',
                'padding-bottom': '16px',
                ':hover': { 'background-color': '#c268c1' },
                'background-color': '#d774d6',
                ':focus': { 'background-color': '#c268c1' },
                'border-radius': '40px',
                'padding-left': '43px',
                'padding-right': '43px',
              },
              quantityInput: {
                'font-size': '16px',
                'padding-top': '16px',
                'padding-bottom': '16px',
              },
            },
            text: { button: 'カートに入れる' },
          },
          productSet: {
            styles: {
              products: {
                '@media (min-width: 601px)': { 'margin-left': '-20px' },
              },
            },
          },
          modalProduct: {
            contents: {
              img: false,
              imgWithCarousel: true,
              button: false,
              buttonWithQuantity: true,
            },
            styles: {
              product: {
                '@media (min-width: 601px)': {
                  'max-width': '100%',
                  'margin-left': '0px',
                  'margin-bottom': '0px',
                },
              },
              button: {
                'font-size': '16px',
                'padding-top': '16px',
                'padding-bottom': '16px',
                ':hover': { 'background-color': '#c268c1' },
                'background-color': '#d774d6',
                ':focus': { 'background-color': '#c268c1' },
                'border-radius': '40px',
                'padding-left': '43px',
                'padding-right': '43px',
              },
              quantityInput: {
                'font-size': '16px',
                'padding-top': '16px',
                'padding-bottom': '16px',
              },
            },
            text: { button: 'Add to cart' },
          },
          option: {},
          cart: {
            styles: {
              button: {
                'font-size': '16px',
                'padding-top': '16px',
                'padding-bottom': '16px',
                ':hover': { 'background-color': '#c268c1' },
                'background-color': '#d774d6',
                ':focus': { 'background-color': '#c268c1' },
                'border-radius': '40px',
              },
            },
            text: {
              title: 'カート',
              total: '小計',
              empty: 'カートを空にする',
              notice: '別途送料がかかります。',
              button: '購入する',
            },
          },
          toggle: {
            styles: {
              toggle: {
                'background-color': '#d774d6',
                ':hover': { 'background-color': '#c268c1' },
                ':focus': { 'background-color': '#c268c1' },
              },
              count: { 'font-size': '16px' },
            },
          },
        },
      })
    }

    const ensureScript = () =>
      new Promise<void>((resolve) => {
        const existing = document.getElementById(
          scriptId
        ) as HTMLScriptElement | null
        if (existing) {
          if (window.ShopifyBuy && window.ShopifyBuy.UI) resolve()
          else
            existing.addEventListener('load', () => resolve(), { once: true })
          return
        }
        const script = document.createElement('script')
        script.id = scriptId
        script.async = true
        script.src = SHOPIFY_SCRIPT_SRC
        script.onload = () => resolve()
        document.head.appendChild(script)
        appendedScript = script
      })

    ;(async () => {
      await ensureScript()
      await init()
    })()

    return () => {
      try {
        const mount = document.getElementById(
          'collection-component-1754018041708'
        )
        if (mount) mount.innerHTML = ''
      } catch {}
      if (appendedScript?.parentNode) {
        appendedScript.parentNode.removeChild(appendedScript)
      }
    }
  }, [])

  return (
    <section className="bg-[#030129] px-[5%] pb-[18vw] pt-24 md:pb-28">
      <div className="mb-8 text-center text-[36px] font-medium text-white">
        商品一覧
        <span className="mx-auto my-4 block h-0.5 w-12 rounded-2xl bg-white"></span>
      </div>
      <div id="collection-component-1754018041708" className="mt-8" />
    </section>
  )
}

export default ShopifyList
