import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { wowButton } from '../helpers/audio';
import {
  Modal,
  ModalButton,
  ModalContent,
  ModalFooter,
  SlideAnimation,
  ModalTitle,
} from 'react-native-modals';

import MContent from './Modal';

/**
 * Componente que muestra el dato curioso de la exhibición.
 * @param {function} showModal - Método de acceso indirecto para modificar la propiedad modal
 * @param {boolean} visible - Parametro que indica la visibilidad del componente <Modal />
 * @param {string} curiousInfo - Dato curioso de la exhibición.
 * @listens {onPress} | El método showModal se dispara cuando ocurre este evento en un componente <ModalButton>.
 * @see https://github.com/jacklam718/react-native-modals
 * @return {Modal} Retorna un componente que contiene maquetada la vista
 */
const ModalBody = ({ showModal, visible, curiousInfo }) => {
  return (
    <Modal
      onShow={wowButton}
      visible={visible}
      onTouchOutside={showModal}
      modalAnimation={
        new SlideAnimation({
          slideFrom: 'bottom',
        })
      }
      modalTitle={<ModalTitle title="¿Sabías qué?" style = {styles.modalwWhole}/>}
      footer={
        <ModalFooter style = {styles.modalwWhole}>
          <ModalButton text="OK" onPress={showModal} />
        </ModalFooter>
      }>
      <ModalContent  style = {styles.modalwWhole}>
        <MContent curiousInfo={curiousInfo} />
      </ModalContent>
    </Modal>
  );
};

export default ModalBody;

/**
 * @ignore
 */
const styles = StyleSheet.create({

  modalwWhole: {
    backgroundColor: '#fff'
  }

});
