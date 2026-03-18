namespace Empregado
{
    partial class Form1
    {
        /// <summary>
        /// Variável de designer necessária.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Limpar os recursos que estão sendo usados.
        /// </summary>
        /// <param name="disposing">true se for necessário descartar os recursos gerenciados; caso contrário, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Código gerado pelo Windows Form Designer

        /// <summary>
        /// Método necessário para suporte ao Designer - não modifique 
        /// o conteúdo deste método com o editor de código.
        /// </summary>
        private void InitializeComponent()
        {
            this.btn_mensalista = new System.Windows.Forms.Button();
            this.btn_horista = new System.Windows.Forms.Button();
            this.SuspendLayout();
            // 
            // btn_mensalista
            // 
            this.btn_mensalista.Font = new System.Drawing.Font("MS Reference Sans Serif", 12F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btn_mensalista.Location = new System.Drawing.Point(292, 121);
            this.btn_mensalista.Margin = new System.Windows.Forms.Padding(5, 4, 5, 4);
            this.btn_mensalista.Name = "btn_mensalista";
            this.btn_mensalista.Size = new System.Drawing.Size(244, 103);
            this.btn_mensalista.TabIndex = 0;
            this.btn_mensalista.Text = "Mensalista";
            this.btn_mensalista.UseVisualStyleBackColor = true;
            this.btn_mensalista.Click += new System.EventHandler(this.btn_mensalista_Click);
            // 
            // btn_horista
            // 
            this.btn_horista.BackColor = System.Drawing.Color.Tomato;
            this.btn_horista.Font = new System.Drawing.Font("MS Reference Sans Serif", 12F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btn_horista.ForeColor = System.Drawing.Color.Transparent;
            this.btn_horista.Location = new System.Drawing.Point(693, 133);
            this.btn_horista.Margin = new System.Windows.Forms.Padding(5, 4, 5, 4);
            this.btn_horista.Name = "btn_horista";
            this.btn_horista.Size = new System.Drawing.Size(236, 103);
            this.btn_horista.TabIndex = 1;
            this.btn_horista.Text = "Horista";
            this.btn_horista.UseVisualStyleBackColor = false;
            this.btn_horista.Click += new System.EventHandler(this.btn_horista_Click);
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(14F, 26F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(1422, 652);
            this.Controls.Add(this.btn_horista);
            this.Controls.Add(this.btn_mensalista);
            this.Font = new System.Drawing.Font("MS Reference Sans Serif", 12F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Margin = new System.Windows.Forms.Padding(5, 4, 5, 4);
            this.Name = "Form1";
            this.Text = "Form1";
            this.Load += new System.EventHandler(this.Form1_Load);
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.Button btn_mensalista;
        private System.Windows.Forms.Button btn_horista;
    }
}

