import React from "react";
import { Form, Input, Button } from "antd";
import '../css/style.css'
    
const contactForm = () => {

    const [form] = Form.useForm();

    const { TextArea } = Input;

    const handleSubmit = () => {
        form.resetFields(); // Vacía los campos
    };

    return(     
                <div className='carrito-formulario'>
                    <Form form={form} layout="horizontal">
                        <Form.Item label="Nombre" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item label="Apellido" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item label="Email" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item label="Teléfono" rules={[{ required: true }]}>
                            <InputNumber />
                        </Form.Item>
                        <Form.Item label="DNI" rules={[{ required: true }]}>
                            <InputNumber />
                        </Form.Item>
                        <Form.Item label="Domicilio" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item label="Localidad" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item label="Provincia" rules={[{ required: true }]}>
                            <Select>
                                <Select.Option value="Buenos Aires">Buenos Aires</Select.Option>
                                <Select.Option value="Catamarca">Catamarca</Select.Option>
                                <Select.Option value="Chaco">Chaco</Select.Option>
                                <Select.Option value="Chubut">Chubut</Select.Option>
                                <Select.Option value="Córdoba">Córdoba</Select.Option>
                                <Select.Option value="Corrientes">Corrientes</Select.Option>
                                <Select.Option value="Entre Ríos">Entre Ríos</Select.Option>
                                <Select.Option value="Formosa">Formosa</Select.Option>
                                <Select.Option value="Jujuy">Jujuy</Select.Option>
                                <Select.Option value="La Pampa">La Pampa</Select.Option>
                                <Select.Option value="La Rioja">La Rioja</Select.Option>
                                <Select.Option value="Mendoza">Mendoza</Select.Option>
                                <Select.Option value="Misiones">Misiones</Select.Option>
                                <Select.Option value="Neuquén">Neuquén</Select.Option>
                                <Select.Option value="Río Negro">Río Negro</Select.Option>
                                <Select.Option value="Salta">Salta</Select.Option>
                                <Select.Option value="San Juan">San Juan</Select.Option>
                                <Select.Option value="San Luis">San Luis</Select.Option>
                                <Select.Option value="Santa Cruz">Santa Cruz</Select.Option>
                                <Select.Option value="Santa Fe">Santa Fe</Select.Option>
                                <Select.Option value="Santiago del Estero">Santiago del Estero</Select.Option>
                                <Select.Option value="Tierra del Fuego">Tierra del Fuego</Select.Option>
                                <Select.Option value="Tucumán">Tucumán</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item label="Código postal" rules={[{ required: true }]}>
                            <InputNumber />
                        </Form.Item>
                        <Form.Item label="Observacion">
                            <TextArea rows={4} />
                        </Form.Item>
                        <Form.Item label="Terminos Y Acuerdos" rules={[{ required: true }]} >
                            <Switch />
                        </Form.Item>
                        <Form.Item label="¿Desea recibir notificaciones por correo electrónico?">
                            <Switch />
                        </Form.Item>
                        <Form.Item label="¿Desea recibir notificaciones por SMS?">
                            <Switch />
                        </Form.Item>
                        <Button color="green" htmlType="submit" variant="solid" onClick={handleSubmit} >COMPRAR</Button>
                    </Form>
                    </div>)
}

export default contactForm;