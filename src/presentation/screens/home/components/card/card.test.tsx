import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Card from './card'

describe('Card Component', () => {

  
  test('renders with a title', () => {
    render(<Card title="Título de prueba" />)
    expect(screen.getByText('Título de prueba')).toBeDefined()
  })


  test('renders with an image', () => {
    const imageUrl = 'https://example.com/image.jpg'
    render(<Card title="Título de prueba" image={imageUrl} />)
    
    const imgElement = screen.getByAltText('Título de prueba') // El alt de la imagen es el título
    expect(imgElement).toBeDefined()
    expect(imgElement).toHaveAttribute('src', imageUrl)
  })

  test('renders as a link when url prop is provided', () => {
    render(<Card title="Título de prueba" url="https://example.com" />)
    
    const linkElement = screen.getByRole('link')
    expect(linkElement).toHaveAttribute('href', 'https://example.com')
    expect(linkElement).toHaveAttribute('target', '_blank')
  })
  
  test('renders the Badge component when badgeText is provided', () => {
    render(<Card title="Título de prueba" badgeText="Nuevo" />)
    
    expect(screen.getByText('Nuevo')).toBeDefined()
  })
  
  test('renders author and avatar', () => {
    const authorName = 'John Doe'
    const avatarUrl = 'https://example.com/avatar.jpg'
    
    render(<Card title="Título de prueba" author={authorName} avatar={avatarUrl} />)
    
    const authorElement = screen.getByText(authorName)
    const avatarElement = screen.getByAltText(authorName)
    
    expect(authorElement).toBeDefined()
    expect(avatarElement).toHaveAttribute('src', avatarUrl)
  })
  
  test('renders lead (volanta) when provided', () => {
    render(<Card title="Título de prueba" lead="Volanta de prueba" />)
    
    expect(screen.getByText('Volanta de prueba')).toBeDefined()
  })

  test('renders as a div when no url is provided', () => {
    render(<Card title="Título de prueba" />)
    
    const cardElement = screen.getByText('Título de prueba').closest('div')
    expect(cardElement?.tagName.toLowerCase()).toBe('div')
  })

  test('applies custom title and image class names', () => {
    render(<Card title="Título de prueba" image="https://example.com/image.jpg" titleClassName="custom-title" imageClassName="custom-image" />)
    
    const titleElement = screen.getByText('Título de prueba')
    expect(titleElement).toHaveClass('custom-title')
  
    const imageElement = screen.getByAltText('Título de prueba')
    expect(imageElement).toHaveClass('custom-image')
  })
  
  test('does not render author or avatar when props are not provided', () => {
    render(<Card title="Título de prueba" />)
  
    const authorElement = screen.queryByText(/John Doe/)
    const avatarElement = screen.queryByAltText(/John Doe/)
  
    expect(authorElement).toBeNull()
    expect(avatarElement).toBeNull()
  })
  
  test('renders badge, lead, and subhead together', () => {
    render(<Card 
      title="Título de prueba"
      badgeText="Nuevo"
      lead="Volanta de prueba"
      subhead="Subtítulo de prueba"
    />)
  
    expect(screen.getByText('Nuevo')).toBeDefined()
    expect(screen.getByText('Volanta de prueba')).toBeDefined()
    expect(screen.getByText('Subtítulo de prueba')).toBeDefined()
  })
  
  test('renders complete card with all elements', () => {
    render(<Card 
      title="Título completo"
      lead="Volanta completa"
      badgeText="Nuevo"
      subhead="Subtítulo completo"
      author="John Doe"
      avatar="https://example.com/avatar.jpg"
      image="https://example.com/image.jpg"
      url="https://example.com"
    />)
  
    // Verifica que todos los elementos se renderizan correctamente
    expect(screen.getByText('Nuevo')).toBeDefined()
    expect(screen.getByText('Volanta completa')).toBeDefined()
    expect(screen.getByText('Subtítulo completo')).toBeDefined()
    expect(screen.getByText('John Doe')).toBeDefined()
    expect(screen.getByAltText('Título completo')).toHaveAttribute('src', 'https://example.com/image.jpg')
    expect(screen.getByAltText('John Doe')).toHaveAttribute('src', 'https://example.com/avatar.jpg')
    
    const linkElement = screen.getByRole('link')
    expect(linkElement).toHaveAttribute('href', 'https://example.com')
  })

  test('does not render lead or badge when not provided', () => {
    render(<Card title="Título de prueba" />)
  
    const leadElement = screen.queryByText(/Volanta de prueba/)
    const badgeElement = screen.queryByText(/Nuevo/)
  
    expect(leadElement).toBeNull()
    expect(badgeElement).toBeNull()
  })
  
  test('sets alt text for images using title and author', () => {
    const title = 'Título de prueba'
    const author = 'John Doe'
  
    render(<Card 
      title={title}
      author={author}
      avatar="https://example.com/avatar.jpg"
      image="https://example.com/image.jpg"
    />)
  
    const imageElement = screen.getByAltText(title)
    const avatarElement = screen.getByAltText(author)
  
    expect(imageElement).toBeDefined()
    expect(avatarElement).toBeDefined()
  })
  
  test('applies correct image class for different sizes', () => {
    render(<Card title="Título de prueba" image="https://example.com/image.jpg" imageClassName="small-image" />)
  
    const imageElement = screen.getByAltText('Título de prueba')
    expect(imageElement).toHaveClass('small-image')
  })
  
  test('adds correct rel and target attributes for external links', () => {
    render(<Card title="Título de prueba" url="https://example.com" />)
    
    const linkElement = screen.getByRole('link')
    expect(linkElement).toHaveAttribute('rel', 'noopener noreferrer')
    expect(linkElement).toHaveAttribute('target', '_blank')
  })
  
})

