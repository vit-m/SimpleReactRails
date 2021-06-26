module API
  module V1
    class BaseController < ApplicationController
      skip_before_action :verify_authenticity_token

      private

      def render_success(data)
        render json: { data: data, errors: [] }, status: 200
      end

      def render_errors(errors:, status:)
        render json: { data: [], errors: errors }, status: status
      end
    end
  end
end
