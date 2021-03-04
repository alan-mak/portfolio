class Api::ContactController < ApplicationController

  def index
    @message = Contact.all
    render json: @message
  end

  def create
  end

  private
  
  def contact_params
    params.require(:contact).permit(
      :name,
      :email,
      :message
    )
  end
end
