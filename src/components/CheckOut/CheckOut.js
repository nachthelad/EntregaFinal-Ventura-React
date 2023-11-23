import { useState, useContext } from 'react';
import { cartContext } from '../Context/CartContext';
import { Link } from 'react-router-dom';
import {
  getFirestore,
  collection,
  addDoc,
  updateDoc,
  doc,
  getDoc,
} from 'firebase/firestore';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const Checkout = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [telefono, setTelefono] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [ordenId, setOrdenId] = useState('');
  
    const { cart, removeProduct, precioTotal } = useContext(cartContext);
  
    const manejadorFormulario = (event) => {
      event.preventDefault();
  
      if (!nombre || !apellido || !telefono || !email) {
        setError('Por favor completa todos los campos');
        return;
      }
  
      const total = precioTotal();
      const orden = {
        items: cart.map((producto) => ({
          id: producto.id,
          nombre: producto.title,
          cantidad: producto.cantidad,
        })),
        total: total,
        fecha: new Date(),
        nombre,
        apellido,
        telefono,
        email,
      };
  
      Promise.all(
        orden.items.map(async (productoOrden) => {
          const db = getFirestore();
          const productoRef = doc(db, 'products', productoOrden.id);
  
          const productoDoc = await getDoc(productoRef);
          const stockActual = productoDoc.data().stock;
  
          await updateDoc(productoRef, {
            stock: stockActual - productoOrden.cantidad,
          });
        })
      )
      .then(() => {
        const db = getFirestore();
        addDoc(collection(db, 'orders'), orden)
          .then((docRef) => {
            setOrdenId(docRef.id);
            removeProduct();
          })
          .catch((error) => {
            console.log('Error en creación de orden', error);
            setError('Error en orden');
          });
      })
      .catch((error) => {
        console.log('No se puede actualizar el stock', error);
        setError('No se actualizó el stock');
      });
  
      setNombre('');
      setApellido('');
      setTelefono('');
      setEmail('');
    };

  return (
    <>
      <Paper style={{ padding: '20px', margin: '20px' }}>
        <Typography variant="h4" gutterBottom>
          Completa el formulario para que nos contactemos y coordinemos para el envío.
        </Typography>

        <form onSubmit={manejadorFormulario}>
          <Grid container spacing={2}>
            {cart.map((producto) => (
              <Grid item xs={12} sm={6} key={producto.id}>
                <Typography>
                  {producto.nombre} {producto.cantidad} - ${producto.precio}
                </Typography>
              </Grid>
            ))}

            <Grid item xs={12}>
              <TextField
                label="Nombre"
                type="text"
                fullWidth
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Apellido"
                type="text"
                fullWidth
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Teléfono"
                type="number"
                fullWidth
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="E-Mail"
                type="email"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>

            {error && (
              <Grid item xs={12}>
                <Typography color="error">{error}</Typography>
              </Grid>
            )}

            {ordenId && (
              <Grid item xs={12}>
                <Typography>
                  ¡Gracias por tu compra! Este es tu número de orden: {ordenId}
                </Typography>
              </Grid>
            )}

            <Grid item xs={12}>
              <Button variant="contained" color="primary" type="submit">
                Finalizar Compra
              </Button>
            </Grid>

            <Grid item xs={12}>
              <Link to="/">
                <Button variant="outlined">Volver al Home</Button>
              </Link>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </>
  );
};

export default Checkout;