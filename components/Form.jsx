import {useState, useEffect, useRef} from 'react'

export default function Form(getMovie) {
    const [formData, setFormData] = useState({searchTerm: ''});

    const handleChange = (e) => {
        setFormData({ 
            ...formData, 
            [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        getMovie.movieSearch(formData.searchTerm)
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name='searchTerm' 
                onChange={handleChange} 
                value={formData.searchTerm}
            />
            <input type="submit" value='submit' />
        </form>
    </div>
  )
}