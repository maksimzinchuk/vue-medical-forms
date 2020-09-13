<template>
  <div class="signup">
    <div class="signup__form">
      <form>
        <div
          class="signup__field"
          :class="{ signup__invalid: $v.clientInfo.surname.$error }"
        >
          <label class="signup__label" for="surname">Фамилия*</label>
          <input
            class="signup__input"
            type="text"
            id="surname"
            v-model="clientInfo.surname"
            @input="$v.clientInfo.surname.$touch()"
          />
          <div v-if="$v.clientInfo.surname.$dirty">
            <span class="signup__error" v-if="!$v.clientInfo.surname.required"
              >Обязательное поле</span
            >
            <span class="signup__error" v-if="!$v.clientInfo.surname.minLength"
            >Фамилия должна содержать хотя бы {{$v.clientInfo.surname.$params.minLength.min}} буквы</span
            >
            <span class="signup__error" v-else-if="!$v.clientInfo.surname.alpha"
            >Фамилия должна состоять русских из букв</span
            >
          </div>

        </div>

        <div
          class="signup__field"
          :class="{ signup__invalid: $v.clientInfo.name.$error }"
        >
          <label class="signup__label" for="name">Имя*</label>
          <input
            class="signup__input"
            type="text"
            id="name"
            v-model="clientInfo.name"
            @input="$v.clientInfo.name.$touch()"
          />
          <div v-if="$v.clientInfo.name.$dirty">
            <span class="signup__error" v-if="!$v.clientInfo.name.required"
              >Обязательное поле</span
            >
            <span class="signup__error" v-if="!$v.clientInfo.name.minLength"
            >Имя должно содержать хотя бы {{$v.clientInfo.name.$params.minLength.min}} буквы</span
            >
            <span class="signup__error" v-else-if="!$v.clientInfo.name.alpha"
            >Имя должно состоять из русских букв</span
            >
          </div>
        </div>

        <div
          class="signup__field"
          :class="{ signup__invalid: $v.clientInfo.secondName.$error }"
        >
          <label class="signup__label" for="secondName">Отчество</label>
          <input
            class="signup__input"
            type="text"
            id="secondName"
            v-model="clientInfo.secondName"
            @input="$v.clientInfo.secondName.$touch()"
          />
          <div v-if="$v.clientInfo.secondName.$dirty">
            <span class="signup__error" v-if="!$v.clientInfo.secondName.minLength"
            >Отчество должно содержать хотя бы {{$v.clientInfo.secondName.$params.minLength.min}} буквы</span
            >
            <span class="signup__error" v-else-if="!$v.clientInfo.secondName.alpha"
            >Отчество должно состоять из русских букв</span
            >
          </div>

        </div>

        <div
          class="signup__field"
          :class="{ signup__invalid: $v.clientInfo.birthday.$error }"
        >
          <label class="signup__label" for="birthday">Дата рождения*</label>
          <input
            class="signup__input"
            type="date"
            id="birthday"
            v-model="clientInfo.birthday"
            @blur="$v.clientInfo.birthday.$touch()"
          />
          <div v-if="$v.clientInfo.birthday.$dirty">
            <span class="signup__error" v-if="!$v.clientInfo.birthday.required"
            >Обязательное поле</span
            >
          </div>
        </div>

        <div
          class="signup__field"
          :class="{ signup__invalid: $v.clientInfo.phone.$error }"
        >
          <label class="signup__label" for="phone">Номер телефона*</label>
          <input
            class="signup__input"
            type="tel"
            id="phone"
            v-model="clientInfo.phone"
            @input="$v.clientInfo.phone.$touch()"
          />
          <span class="signup__error" v-if="!$v.clientInfo.phone.firstDigit"
            >Введите номер телефона начиная с 7</span
          >
          <div v-else>
            <span class="signup__error" v-if="!$v.clientInfo.phone.minLength"
            >Телефон должен содержать не менее {{$v.clientInfo.phone.$params.minLength.min}} цифр</span
            >
            <span class="signup__error" v-if="!$v.clientInfo.phone.maxLength"
            >Телефон должен содержать не более {{$v.clientInfo.phone.$params.maxLength.max}} цифр</span
            >
          </div>

        </div>

        <div class="signup__field">
          <label class="signup__label" for="country">Пол</label>
          <select class="signup__selector" id="sex" v-model="clientInfo.sex">
            <option value="Male">Мужской</option>
            <option value="Female">Женский</option>
          </select>
        </div>

        <div class="signup__field"  :class="{ 'signup__selector-error': $v.clientInfo.clients.$error }">
          <label class="signup__label" for="clients">Группа клиентов*</label>
          <select
            class="signup__selector "
            id="clients"
            multiple
            size="3"
            @blur="$v.clientInfo.clients.$touch()"
            v-model="clientInfo.clients"
          >
            <option value="vip">VIP</option>
            <option value="problematical">Проблемные</option>
            <option value="insurance">ОМС</option>
          </select>
          <div v-if="$v.clientInfo.clients.$dirty">
            <span
                class="signup__error"
                v-if="!$v.clientInfo.clients.required"
            >Обязательное поле</span
            >
          </div>
        </div>

        <div class="signup__field">
          <label class="signup__label" for="doctor">Лечащий врач</label>
          <select
            class="signup__selector"
            id="doctor"
            v-model="clientInfo.doctor"
          >
            <option value="Ivanov">Иванов</option>
            <option value="Zaharov">Захаров</option>
            <option value="Chernysheva">Чернышева</option>
          </select>
        </div>

        <div class="signup__field signup__field_checkbox">
          <input type="checkbox" id="noSms" v-model="clientInfo.noSms" />
          <label class="signup__label" for="noSms">Не отправлять СМС</label>
        </div>
        <h2>Адрес</h2>

        <div class="signup__field" :class="{ signup__invalid: $v.address.zip.$error }">
          <label class="signup__label" for="zip">Индекс</label>
          <input
            class="signup__input"
            type="text"
            id="zip"
            @input="$v.address.zip.$touch()"
            v-model="address.zip"
          />
          <span class="signup__error" v-if="!$v.address.zip.minLength"
          >Индекс должен содержать {{$v.address.zip.$params.minLength.min}} цифр</span
          >
          <span class="signup__error" v-else-if="!$v.address.zip.maxLength"
          >Индекс должен содержать не больше {{$v.address.zip.$params.maxLength.max}} цифр</span
          >
          <span class="signup__error" v-else-if="!$v.address.zip.numeric"
          >Индекс может содержать только цифры</span
          >

        </div>
        <div class="signup__field" :class="{ signup__invalid: $v.address.country.$error }">
          <label class="signup__label" for="country">Страна</label>
          <input
            class="signup__input"
            type="text"
            id="country"
            v-model="address.country"
          />
        </div>
        <div class="signup__field" :class="{ signup__invalid: $v.address.region.$error }">
          <label class="signup__label" for="region">Область</label>
          <input
            class="signup__input"
            type="text"
            id="region"
            v-model="address.region"
          />
        </div>

        <div
          class="signup__field"
          :class="{ signup__invalid: $v.address.city.$error }"
        >
          <label class="signup__label" for="city">Город*</label>
          <input
            class="signup__input"
            type="text"
            id="city"
            v-model="address.city"
            @input="$v.address.city.$touch()"
          />
          <div v-if="$v.address.city.$dirty">
            <span class="signup__error" v-if="!$v.address.city.required"
              >Обязательное поле</span
            >
            <span class="signup__error" v-if="!$v.address.city.minLength"
            >Город должен содержать хотя бы {{$v.address.city.$params.minLength.min}} буквы</span
            >
          </div>
        </div>

        <div class="signup__field" :class="{ signup__invalid: $v.address.street.$error }">
          <label class="signup__label" for="street">Улица</label>
          <input
            class="signup__input"
            type="text"
            id="street"
            v-model="address.street"
          />
        </div>

        <div class="signup__field">
          <label class="signup__label" for="building">Дом</label>
          <input
            class="signup__input"
            type="text"
            id="building"
            v-model="address.building"
          />
        </div>

        <h2>Паспорт</h2>

        <div
          class="signup__field"
          :class="{ 'signup__selector-error': $v.passport.document.$error }"
        >
          <label class="signup__label" for="document">Тип документа*</label>
          <select
            class="signup__selector"
            id="document"
            @blur="$v.passport.document.$touch()"
            v-model="passport.document"
          >
            <option value="passport">Паспорт</option>
            <option value="birthCert">Свидетельство о рождении</option>
            <option value="drivingLic">Вод. удостоверение</option>
          </select>
          <div v-if="$v.passport.document.$dirty">
             <span class="signup__error" v-if="!$v.passport.document.required"
             >Обязательное поле</span
             >
          </div>

        </div>

        <div class="signup__field">
          <label class="signup__label" for="passportSeries">Серия</label>
          <input
            class="signup__input"
            type="text"
            id="passportSeries"
            v-model="passport.passportSeries"
          />
        </div>

        <div class="signup__field">
          <label class="signup__label" for="passportNumber">Номер</label>
          <input
            class="signup__input"
            type="number"
            id="passportNumber"
            v-model="passport.passportNumber"
          />
        </div>

        <div class="signup__field">
          <label class="signup__label" for="byWhom">Кем выдан</label>
          <input
            class="signup__input"
            type="text"
            id="byWhom"
            v-model="passport.byWhom"
          />
        </div>

        <div class="signup__field" :class="{ signup__invalid: $v.passport.issueDate.$error }">
          <label class="signup__label" for="issueDate">Дата выдачи*</label>
          <input
            class="signup__input"
            type="date"
            id="issueDate"
            @blur="$v.passport.issueDate.$touch()"
            v-model="passport.issueDate"
          />
          <div v-if="$v.passport.issueDate.$dirty">
            <span class="signup__error" v-if="!$v.passport.issueDate.required"
              >Обязательное поле</span
            >
          </div>
        </div>

          <div class="signup__submit-wrapper">
            <button
              class="signup__button"
              type="submit"
              @click.prevent="makeUser"
              :disabled="$v.$invalid"
            >
              Создать пользователя
            </button>
            <p class="signup__success">{{ showUserCreated }}</p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { required, numeric, minLength, maxLength } from 'vuelidate/lib/validators'
  export default {
    data() {
    return {
      clientInfo: {
        surname: "",
        name: "",
        secondName: "",
        birthday: "",
        phone: "",
        sex: "",
        clients: [],
        doctor: "",
        noSms: false
      },
      address: {
        zip: "",
        country: "",
        region: "",
        city: "",
        street: "",
        building: ""
      },
      passport: {
        document: "",
        passportSeries: "",
        passportNumber: "",
        byWhom: "",
        issueDate: ""
      }
    };
  },
  validations: {
    clientInfo: {
      surname: {
        required,
        alpha: val => /^[а-яё]*$/i.test(val),
        minLength: minLength(3),
      },
      name: {
        required,
        alpha: val => /^[а-яё]*$/i.test(val),
        minLength: minLength(2)
      },
      secondName: {
        alpha: val => /^[а-яё]*$/i.test(val),
        minLength: minLength(3)
      },
      birthday: {
        required
      },
      phone: {
        required,
        numeric,
        maxLength: maxLength(11),
        minLength: minLength(11),
        firstDigit(phone) {
          if (phone.length >= 1) return /^[7]/.test(phone);
          return true;
        }
      },
      clients: {
        required
      }
    },
    address: {
      city: {
        required,
        minLength: minLength(2)
      },
      zip: {
        minLength: minLength(6),
        maxLength: maxLength(6),
        numeric
      },
      country: {
        minLength: minLength(2)
      },
      street: {
        minLength: minLength(5)
      },
      region: {
        minLength: minLength(3)
      }
    },
    passport: {
      document: {
        required
      },
      passportNumber: {
        numeric
      },
      issueDate: {
        required
      }
    }
  },
  methods: {
    makeUser() {
      const newUser = {
        clientInfo: this.clientInfo,
        address: this.address,
        passport: this.passport
      };
      this.$store.dispatch("createNewUser", newUser);
    }
  },
  computed: {
    showUserCreated() {
      return this.$store.getters.isUserCreated;
    }
  }
};
</script>

<style lang="sass" scoped>
$formBorder: 1px solid #ccc
$mainColor: #00b4ed
$errorBorder: 1px solid red

.signup__field.signup__invalid
  .signup__input
    border: $errorBorder
    background-color: #ffc9aa

.signup__field.signup__selector-error
  .signup__selector
    border: $errorBorder
    background-color: #ffc9aa

.signup__submit-wrapper
  align-items: center
  margin-top: 30px

.signup__success
  margin: 16px 0 0
  text-align: center

.signup__form
  max-width: 400px
  margin: 30px auto
  border: 1px solid #eee
  padding: 20px
  box-shadow: 0 2px 3px #ccc

.signup__field
  margin: 17px auto
  position: relative

.signup__selector
  width: 100%
  padding: 6px 12px
  border: $formBorder
  font: inherit

.signup__label
  display: block
  color: #4e4e4e
  margin-bottom: 6px

.signup__field_checkbox
  display: flex

.signup__error
  font: inherit
  font-size: 12px
  margin-left: 14px
  color: red
  position: absolute

.signup__input
  font: inherit
  width: 100%
  padding: 6px 12px
  box-sizing: border-box
  border: $formBorder

.signup__input:focus
  outline: none
  border: 1px solid $mainColor
  background-color: #eee

.signup__button
  border: 1px solid $mainColor
  color: $mainColor
  padding: 10px 20px
  font: inherit
  cursor: pointer

.signup__button:hover,
.signup__button:active
  background-color: $mainColor
  color: white

.signup__button[disabled]
  border: $formBorder
  background-color: transparent
  color: #ccc
</style>
