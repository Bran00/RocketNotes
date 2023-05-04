import { useState } from 'react';
import { useNavigate } from 'react-router-dom';



import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { NoteItem } from '../../components/NoteItem';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

import { api } from "../../services/api"

import { Container, Form } from './styles';

export function New() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState('');
  
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState('');

  const navigate = useNavigate();

  function handleBack() {
   navigate(-1)
  }
  
  function handleAddLink() {
    setLinks(prevState => [ ...prevState, newLink])
    setNewLink('')
  }

  function handleRemoveLink(deleted) {
    setLinks(prevState => prevState.filter(link => link !== deleted))
  }

  function handleAddTag() {
    setTags(prevState => [ ...prevState, newTag])
    setNewTag('')
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }

   async function handleNewNote() {
    if(!title) {
      return alert("Vocé deve adicionar um título!")
    }

    if(!description) {
      return alert("Vocé deve adicionar uma descrição!")
    }


    if(tags.length < 1 ) {
      return alert("Você deve adicionar uma tag!")
    }

    if(links.length < 1) {
      return alert("Vocé deve adicionar um link!")
    }

     await api.post("/notes", {
       title,
       description,
       tags,
       links,
     });

     alert("Nota criada com sucesso!")
     navigate(-1)
   }

  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar Nota</h1>
            <ButtonText 
            title="Voltar" 
            onClick={handleBack}
            />
          </header>
          <Input 
          placeholder="Título"
          onChange={ e => setTitle(e.target.value)}
          />

          <Textarea 
          placeholder="Observações"
          onChange={(e) => setDescription(e.target.value)}
          />

          <Section title="Links Úteis">
            {links.map((link, index) => (
              <NoteItem
                key={String(index)}
                value={link}
                onClick={() => handleRemoveLink(link)}
              />
            ))}
            <NoteItem
              placeholder="Novo link"
              isNew
              onChange={(e) => setNewLink(e.target.value)}
              onClick={handleAddLink}
              value={newLink}
            />
          </Section>

          <Section title="Marcadores">
            <div className="tags">
              {
                tags.map((tag, index) => (
                  <NoteItem
                  key={String(index)}
                  value={tag}
                  onClick={() => handleRemoveTag(tag)}
                  />
                ))
              }
              <NoteItem 
              isNew 
              placeholder="Nova tag" 
              onChange={(e => setNewTag(e.target.value))}
              onClick={handleAddTag}
              value={newTag}
              />
            </div>
          </Section>
          <Button 
          title="Salvar" 
          onClick={handleNewNote}
          />
        </Form>
      </main>
    </Container>
  )
}