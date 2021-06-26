module API
  module V1
    class ContactsController < BaseController
      def create
        contact = Contact.new(contact_params)

        if contact.save
          render_success [contact]
        else
          render_errors(errors: contact.errors.full_messages, status: 422)
        end
      end

      def index
        render_success Contact.sorted
      end

      private

      def contact_params
        params.require(:contact).permit(:name, :email)
      end
    end
  end
end
